

const codes = {
8 : 'BACKSPACE',
9 : 'TAB',
13 : 'RETURN',
16 : 'SHIFT',
17 : 'CONTROL',
18 : 'ALT',
27 : 'ESC',
37 : 'LEFT',
38 : 'UP',
39 : 'RIGHT',
40 : 'DOWN',
65 : 'A',
66 : 'B',
67 : 'C',
68 : 'D',
69 : 'E',
70 : 'F',
71 : 'G',
72 : 'H',
73 : 'I',
74 : 'J',
75 : 'K',
76 : 'L',
77 : 'M',
78 : 'N',
79 : 'O',
80 : 'P',
81 : 'Q',
82 : 'R',
83 : 'S',
84 : 'T',
85 : 'U',
86 : 'V',
87 : 'W',
88 : 'X',
89 : 'Y',
90 : 'Z',
48 : '0',
49 : '1',
50 : '2',
51 : '3',
52 : '4',
53 : '5',
54 : '6',
55 : '7',
56 : '8',
57 : '9',
96 : '0',
97 : '1',
98 : '2',
99 : '3',
100 : '4',
101 : '5',
102 : '6',
103 : '7',
104 : '8',
105 : '9',
106 : '*',
107 : '+',
108 : 'ENTER',
109 : '-',
110 : '.',
111 : '/',
112 : 'F1',
113 : 'F2',
114 : 'F3',
115 : 'F4',
116 : 'F5',
117 : 'F6',
118 : 'F7',
119 : 'F8',
120 : 'F9 ',
121 : 'F10',
122 : 'F11',
123 : 'F12',
124 : 'F13',
125 : 'F14',
126 : 'F15',
127 : 'F16',
186 : 'SEMI COLON',
187 : 'EQUALS',
188 : 'COMMA',
189 : 'HYPHEN',
190 : 'FULL STOP',
191 : 'FORWARD SLASH',
219 : 'LEFT BRACKET',
220 : 'BACKSLASH',
221 : 'RIGHT BRACKET',
222 : 'APOSTROPHE'

}

let keys_pressed = [];

export function keyDown(event) {

  if (keys_pressed.indexOf(event.keyCode) == -1) {
    keys_pressed.push(event.keyCode);
  }

  showKeysPressed();
}

export function keyUp(event) {
  keys_pressed.splice(keys_pressed.indexOf(event.keyCode), 1);
  showKeysPressed();
}

function markNoKeysPressed(element) {
  element.innerHTML = '(no keys pressed)';
  element.setAttribute('class', 'blank');
}

export function showKeysPressed() {
  var element = document.getElementById('keyboard');

  var string = '';

  for (var i = 0; i < keys_pressed.length; i++) {


    var key_name = codes[keys_pressed[i]];

    if (key_name) {
      string = string + key_name + ' ';
    } else {
      string = string + keys_pressed[i] + ' ';
    }

  }

  if (string != '') {
    element.setAttribute('class', '');
    element.innerHTML = string;
  } else {
    markNoKeysPressed(element);
  }
}
