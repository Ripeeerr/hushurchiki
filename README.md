<div align="center">

# Читинские Хушуры

![status](https://img.shields.io/badge/status-active-8be9fd?style=for-the-badge&labelColor=1a1026)
![pages](https://img.shields.io/badge/GitHub%20Pages-deployed-bd93f9?style=for-the-badge&labelColor=1a1026)

</div>

## О проекте

Сайт команды **«Читинские Хушуры»** — семь бойцов, один хушур на всех. Дивизион Забайкальского края.

Проект включает:

- **Landing page** (`index.html`) — визитка команды с тёмной каменной эстетикой
- **Коллекция Hello, World!** (`main project/`) — примеры «Hello, World!» на 50+ языках программирования: от Ada и C до Zig и HolyC

Сайт развёрнут через **GitHub Pages** и автоматически деплоится при пушах в ветку `dungeon_master`.

## Структура

```
hushurchiki/
├── index.html            # Главная страница
├── css/
│   └── style.css         # Стили (stone/gold theme)
├── img/
│   └── logo.jpg          # Логотип
├── main project/         # Коллекция Hello, World!
│   ├── hello.py
│   ├── hello.c
│   ├── main.rs
│   └── ... (50+ файлов)
├── .github/workflows/    # CI/CD для GitHub Pages
└── README.md
```

## Стек

- HTML + CSS (кастомная stone/gold тема)
- GitHub Pages + GitHub Actions

## Коллекция языков `main project/`

| Категория | Языки |
|-----------|-------|
| Классика | C, C++, Java, Python, C#, JavaScript, TypeScript, Go, Rust, Swift, Kotlin |
| Функциональные | Haskell, OCaml, F#, Clojure, Scheme, Racket, Erlang, Elixir |
| Динамические | Ruby, PHP, Perl, Lua, Julia, R, Tcl |
| Системные | Zig, Odin, Nim, Ada, Carbon, V, Vale, D, Crystal |
| Эзотерические | HolyC, Pony, Red, REBOL, Janet, Hy, Wren, Ring, MoonScript |
| Ретро | COBOL, Fortran, Pascal, APL, J |
| Прочее | Visual Basic, PowerShell (требует уточнения), и другие |

## Планы

- [ ] Дополнить секции команды
- [ ] Добавить больше языков в коллекцию
- [ ] Улучшить адаптивность

## Лицензия

MIT
