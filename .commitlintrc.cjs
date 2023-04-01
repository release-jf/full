/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["all" , "release", "Linux", "Tools"]],
  },
  prompt: {
    allowCustomIssuePrefix: false,
    allowEmptyIssuePrefix: false,
  },
};