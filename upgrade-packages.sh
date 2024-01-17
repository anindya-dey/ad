echo "Installing dependencies..."

pnpm add @nx/next next next-themes react react-dom react-icons

echo "Installed dependencies!"

echo "Installing dev-dependencies..."

pnpm add --save-dev @nx/cypress @nx/eslint-plugin @nx/jest @nx/js @nx/linter @nx/react @nx/workspace @testing-library/react @types/jest @types/node @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer babel-jest cypress eslint eslint-config-next eslint-config-prettier eslint-plugin-cypress eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks jest jest-environment-jsdom jest-environment-node nx nx-cloud postcss prettier tailwindcss ts-jest ts-node tslib typescript 

echo "Installed dev-dependencies!"
