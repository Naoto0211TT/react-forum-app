# react-wiki

ドキュメント管理システム（フロントコース 実践演習）

## 目次

- [関連リンク](#links)
- [要件](#requirements)
- [環境構築](#environment)
- [使用技術](#used-technology)
- [ディレクトリ構成](#directory-config)
- [Atomic Design 責務早見表](#atomic-design)

<h2 id="links">関連リンク</h2>

<table>
  <thead>
    <tr>
      <th>デザイン</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <a
          href="https://www.figma.com/file/9TigztFkXeiN14AgNYtGIa/react-wiki?type=design&t=ZoGKbljIILw9DSxN-6"
          target="_blank"
          style="display: inline-block"
        >
          <img src="/assets/image/figma.svg" height="40px" style="vertical-align: middle">
        </a>
      </td>
    </tr>
  </tbody>
</table>

<h2 id="requirements">要件</h2>

- volta がインストールされていること
  - `volta -v`を実行しバージョンが表示されていれば問題ありません

<h2 id="environment">環境構築</h2>

1. リポジトリクローン & 対象フォルダへ移動

```sh
git clone https://github.com/gizumo-education/react-wiki.git && cd react-wiki
```

2. 依存モジュールのインストール

```sh
npm i
```

3. husky の Git フックを有効化

```sh
npm run prepare
```

4. 開発サーバー立ち上げ

```sh
npm run dev
```

5. ブラウザで[localhost:8000](http://localhost:8000)が立ち上がり、ログイン画面が表示されていることを確認

6. ログイン画面で以下の情報を入力しログイン

| メールアドレス   | パスワード |
| ---------------- | ---------- |
| guest@gizumo.com | gizumowiki |

<h2 id ="used-technology">使用技術</h2>

![node version](https://img.shields.io/badge/node-18.16.0-48C628.svg?style=flat-square) ![npm version](https://img.shields.io/badge/npm-9.5.1-2D7DBE.svg?style=flat-square) ![volta version](https://img.shields.io/badge/volta-1.0.8~-EDCF3A.svg?style=flat-square)

|  ライブラリ  | バージョン |                ドキュメント                |
| :----------: | :--------: | :----------------------------------------: |
|    React     |  18.12.0   |             https://react.dev/             |
| React Router |   6.10.0   |      https://reactrouter.com/en/main       |
|    Recoil    |   0.7.7    |           https://recoiljs.org/            |
| CSS Modules  |            | https://github.com/css-modules/css-modules |
|     clsx     |   1.2.1    |   https://github.com/lukeed/clsx#readme    |
|  Storybook   |   7.0.6    |         https://storybook.js.org/          |
|     Zod      |   3.21.4   |              https://zod.dev/              |
|     Vite     |   4.3.0    |           https://ja.vitejs.dev/           |

<h2 id ="directory-config">ディレクトリ構成</h2>

各ディレクトリ・ファイルの役割は以下のようになっています。

```
.
├── .github            # プルリクエストのテンプレなどGitHubの設定
├── .husky             # husky(commit時のGitフック)の設定
├── .scaffdog          # scaffdog(コンポーネント自動生成)の設定
├── .storybook         # Storybookの設定
├── .vscode            # ワークスペースのVSCode設定
├── assets             # 画像などの静的ファイル
├── docs               # API仕様書などのドキュメント
├── env                # 環境変数ファイル
├── src
│   ├── components     # Atomic Designによるコンポーネント管理
│   ├── hooks          # 汎用的なカスタムフック
│   ├── libs           # node_modulesのライブラリをラップしたwrapper関数
│   ├── routes         # ルーティング設定
│   ├── schemas        # バリデーションスキーマ
│   ├── stores         # グローバルstate(Recoil)
│   ├── styles         # 汎用的なスタイル
│   ├── utils          # 汎用的な関数
│   └── main.jsx       # Reactのルートコンポーネント
├── .eslintrc.json     # ESLintの設定ファイル
├── .gitignore         # gitの管理対象から外すファイルを記載
├── .lintstagedrc.js   # lint-staged設定ファイル
├── .prettierrc.json   # Prettierの設定ファイル
├── .stylelintrc.json  # Stylelintの設定ファイル
├── index.html
├── jsconfig.json      # JavaScriptの設定ファイル
├── package-lock.json  # インストールしたパッケージの詳細なバージョンを記載
├── package.json       # インストールするパッケージのバージョン範囲とその他設定
└── vite.config.js     # Viteの設定ファイル
```

<h2 id ="atomic-design">Atomic Design 責務早見表</h2>

|           |      再利用性      |       style        |   store(Recoil)    |    ドメイン知識    |                                      責務                                       |
| :-------: | :----------------: | :----------------: | :----------------: | :----------------: | :-----------------------------------------------------------------------------: |
|   atoms   | :white_check_mark: | :white_check_mark: |        :x:         |        :x:         |           最小単位の UI コンポーネント <br> ex: Button, Heading</div>           |
| molecules | :white_check_mark: | :white_check_mark: |        :x:         |        :x:         |                     atoms を組み合わせた UI コンポーネント                      |
| organisms |        :x:         |     :warning:      | :white_check_mark: | :white_check_mark: |          ドメイン知識を持つ<br>API 通信によりリソースのやり取りを行う           |
| templates | :white_check_mark: | :white_check_mark: |        :x:         |        :x:         |                  organisms を使用した再利用可能なテンプレート                   |
|   pages   |        :x:         |     :warning:      | :white_check_mark: | :white_check_mark: | URL に対応した一意なページ<br>React Router の path が各ページにマッピングされる |
