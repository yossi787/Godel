(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"בקרת-זרימה"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#בקרת-זרימה","aria-hidden":"true"}},[s._v("#")]),s._v(" בקרת זרימה")]),s._v(" "),n("h2",{attrs:{id:"משפטי-תנאי"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#משפטי-תנאי","aria-hidden":"true"}},[s._v("#")]),s._v(" משפטי תנאי")]),s._v(" "),n("p",[n("strong",[s._v("משפט תנאי")]),s._v(" מורכב מתנאי כלשהו (משתנה מסוג "),n("code",[s._v("Bool")]),s._v(") ורצף פעולות שירוצו במידה והערך הוא "),n("code",[s._v("true")]),s._v(".")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('val x = 3\nif (x > 2) {\n  println("x is greater than 2.")\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("ניתן לצרף משפטי תנאי רצף פעולו שירוץ במידה והתנאי לא מתקיים באמצעות המילה "),n("code",[s._v("else")]),s._v(".")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('val x = 1\nif (x > 2) {\n  println("x is greater than 2.")\n} else {\n  println("x is less than 2.")\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("ניתן להשתמש במשפטי תנאי בהגדרת ערך.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('val stringToPrint = if (x > 2) "x is greater than 2." else "x is less than 2."\nprintln(stringToPrint)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"משפטי-when"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#משפטי-when","aria-hidden":"true"}},[s._v("#")]),s._v(" משפטי when")]),s._v(" "),n("p",[s._v("ניתן לקצר  לולאת תנאים ארוכה למשפט when בודד.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('val x = 1\nval y = 3\nval stringToPrint = when {\n  x > 2 -> "x is greater than 2"\n  y < 4 -> "x is\'nt greater than 2 and y is less than 3"\n  else -> "x is\'nt greater than 2 and y is\'nt less than 3"\n}\nprintln(stringToPrint)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"לולאות"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#לולאות","aria-hidden":"true"}},[s._v("#")]),s._v(" לולאות")]),s._v(" "),n("p",[s._v("ניתן להגדיר קטע קוד מסויים שירוץ כל עוד ערכו של תנאי (משתנה מסוג "),n("code",[s._v("Bool")]),s._v(") הוא "),n("code",[s._v("true")]),s._v(".")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var x: Int = 0\nwhile (x < 10) {\n  x = x + 1\n  println(x)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}],!1,null,null,null);t.options.__file="readme.md";a.default=t.exports}}]);