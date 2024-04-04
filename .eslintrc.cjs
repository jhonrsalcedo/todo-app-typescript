module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'sonarjs/no-duplicate-string': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ]
    // 'object-curly-newline': [
    //   'error',
    //   {
    //     ObjectExpression: {
    //       multiline: true,
    //       minProperties: 3,
    //       consistent: true
    //     },
    //     ObjectPattern: { multiline: true, minProperties: 3, consistent: true },
    //     ImportDeclaration: {
    //       multiline: true,
    //       minProperties: 3,
    //       consistent: true
    //     },
    //     ExportDeclaration: {
    //       multiline: true,
    //       minProperties: 3,
    //       consistent: true
    //     }
    //   }
    // ]
  },
  settings: {
    react: {
      version: '18'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  ignorePatterns: ['.eslintrc.cjs']
}
