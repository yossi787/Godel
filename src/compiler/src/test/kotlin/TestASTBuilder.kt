package com.godel.compiler

import ASTJSONizer
import com.beust.klaxon.JsonObject
import io.kotlintest.shouldBe
import io.kotlintest.shouldThrow
import io.kotlintest.specs.StringSpec

class TestASTBuilder : StringSpec({
    val parser = com.beust.klaxon.Parser.default()
    val inputs = parser.parse("./src/test/inputs/ASTs.json") as JsonObject

    fun lexThenParseThenTransform(sourceCode: String) =
        ASTTransformer.transformAST(Parser.parse(Lexer.lex(sourceCode.asSequence())))

    infix fun String.astShouldBe(expectedResultName: String) {
        val ast = lexThenParseThenTransform(this)
        val rawJsonResult = ASTJSONizer.toJSON(ast)
        val result = parser.parse(rawJsonResult.byteInputStream()) as JsonObject
        result shouldBe inputs.obj(expectedResultName)
    }

    fun String.astShouldNotBeBuilt() {
        shouldThrow<CompilationError> {
            lexThenParseThenTransform(this)
        }
    }

    "val declaration" {
        "val x = 3.14" astShouldBe "val declaration"
        "val x = if (true) 1 else val x y = 2".astShouldNotBeBuilt()
        "val x = if (true) 1".astShouldNotBeBuilt()
    }

    "operations precedence" {
        "val x = 1 + 2 / 3 * 4 + 4.2 ?: 5.y.z(a, b, c) <= 6 == 7 > 8 && 9 || 10 to 11" astShouldBe "operations precedence"
    }

    "function calls" {
        "1.a.b.c().d(x)(y)(z)" astShouldBe "multiple member accesses and invocations"
        "(1.a.b.c()).d(x)(y)(z)" astShouldBe "multiple member accesses and invocations" // associativity
        "(1.a.b).c().d(x)(y)(z)" astShouldBe "multiple member accesses and invocations"
        "1.a.b.c().d(x)(y)(a=z, b=x)" astShouldBe "multiple member accesses and invocations with named parameters"
    }

    "if" {
        """if (x) { val x = 3.14 } else { 2 }""" astShouldBe "if statement"
        """if (x) { val x = 3.14; "hello" } else { 2 }""" astShouldBe "if expression"
        """if (true) "hello" else val x = 2""" astShouldBe "if expression single statement"
        """if (true) "hello" else 2""" astShouldBe "if expression single expression"
        """if (true) if(x) "hello" else 2""" astShouldBe "nested ifs"
        """if (true) if(x) 1 else 2 else 3""" astShouldBe "nested if expressions"
        """if (true) val x = if(x) 1 else 2 else 3""" astShouldBe "val with if inside if"
    }

    "empty programs" {
        "" astShouldBe "empty program"
        "if (true) {} else 2" astShouldBe "empty if block"
    }
})