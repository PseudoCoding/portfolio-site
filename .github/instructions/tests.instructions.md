---
applyTo: "**/tests/**,**/*_test.py,**/*.test.ts"
---

## Testing Guidelines

- Use AAA pattern: Arrange, Act, Assert
- One assertion concept per test
- Use descriptive test names: test_[method]_[scenario]_[expected]
- Mock external dependencies
- Include both happy path and error cases
- Aim for 80%+ coverage on new code