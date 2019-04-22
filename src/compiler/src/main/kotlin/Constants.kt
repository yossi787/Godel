package com.godel.compiler

interface NodeType

enum class TokenType : NodeType {
    WhiteSpace, SemiColon, BreakLine, Colon, Dot, Comma, Apostrophes, Underscore,
    Percentage, Backslash, Star, Minus, Plus, ExclamationMark, QuestionMark, And, Or,
    Keyword, Assignment, QuestionedDot, Elvis,
    OpenBraces, CloseBraces, OpenParenthesis, CloseParenthesis, OpenBrokets, CloseBrokets,
    DecimalLiteral, SimpleName,
    Unknown;
}

enum class Keyword {
    Val,
    Var,
    Fun,
    Class,
    True,
    False,
    If,
    Else,
    While,
    Public,
    Private,
    When;

    val asString = this.name.toLowerCase()
}
