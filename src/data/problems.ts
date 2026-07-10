export interface Problem {
  id: string
  title: string
  summary: string
  category: string
  context: string
  tags: string[]
  problem: string
  investigation: string
  solution: string
  outcome: string
}

export const problems: Problem[] = [
  {
    id: 'wrong-package-import',
    title: 'My Tests Could Not Find the Page Classes I Wrote',
    summary:
      'LoginSteps.java was importing from the wrong package. The class existed, the path looked right, but Cucumber kept throwing errors because the import was pointing to a repo that was not even open.',
    category: 'Test Automation',
    context: 'JayJay, framework project',
    tags: ['Cucumber', 'Selenium', 'Java', 'Import', 'Package'],
    problem:
      'I was building my first automation framework for a QA course called JayJay. I had written all the page classes and step definitions, and everything looked connected. But when I ran the tests, Java kept saying it could not find LoginPage. The file was right there. I could see it. I had no idea why it was not being found.',
    investigation:
      'I asked my mentor and looked it up online, but the answers I got were too general to help. I went back to my mentor a second time with more specific details, and he pointed me toward the import section. That was when I slowed down and actually read the import line at the top of LoginSteps.java properly. It said `import com.nathan.pages.LoginPage`. But my project package was not `com.nathan`, it was just `pages`. That import was left over from a completely different repository I had worked on earlier.',
    solution:
      'Changed the import from `import com.nathan.pages.LoginPage` to `import pages.LoginPage` to match the actual package structure of the current project. One line. That was it.',
    outcome:
      'The tests ran immediately. No other changes needed. I learned that when nothing makes sense, go back to the most basic thing, read every line as if you have never seen it before. The bug was not hidden. I just had not actually read it.',
  },
  {
    id: 'webdrivermanager-version-conflict',
    title: 'My Browser Kept Crashing Before a Single Test Could Run',
    summary:
      'Every time I ran the tests, Chrome crashed before anything happened. I spent days trying to figure out why, going through docs and asking around, until I found the issue was in how I set up the dependencies.',
    category: 'Build and Dependencies',
    context: 'JayJay, final project setup',
    tags: ['Gradle', 'WebDriverManager', 'Selenium', 'Dependencies', 'Java'],
    problem:
      'After setting up my second project, the tests would start and then immediately crash when trying to launch Chrome. The error said something like "SessionNotCreatedException". I had no idea what that meant. The code looked the same as my previous project, so I knew it was not about the test logic. Something in the setup was wrong but I could not see what.',
    investigation:
      'I asked my mentor and went through forums and docs with a classmate. We tried a bunch of things but kept getting different results. After a few days of going back and forth, I decided to slow down and actually read the WebDriverManager and Selenium documentation properly instead of just searching for quick fixes. That was when I found the issue: the two libraries had version compatibility requirements I had not checked, and I had placed WebDriverManager under the wrong scope in build.gradle, which meant the driver was not even available at the time the tests ran.',
    solution:
      'Moved `webdrivermanager` from `implementation` to `testImplementation` in build.gradle and matched the version numbers to ones confirmed compatible in the docs. Re-ran the tests and Chrome launched cleanly.',
    outcome:
      'Everything worked after that. The main thing I learned was to actually read the documentation properly instead of just skimming for a quick answer. The fix was always there, I just had not been patient enough to find it.',
  },
  {
    id: 'final-project-jayjay',
    title: 'Two Weeks of Being Lost, Then Finally Getting It',
    summary:
      'My final project at JayJay was supposed to show everything I learned. Instead the build kept breaking, the CI kept failing, and I could not figure out why. The commit history tells the whole story.',
    category: 'Mindset',
    context: 'JayJay, final project',
    tags: ['JayJay', 'Final Project', 'Growth', 'Consistency', 'Problem Solving'],
    problem:
      'My final project was a full QA automation framework covering both UI and API testing, running on GitHub Actions. The code itself was fine but the project kept refusing to build. Gradle could not resolve dependencies, the Cucumber runners were not picking up the right tests, and the HTML reports were throwing an ENOTDIR error in CI. Every time I fixed one thing, something else broke. I made over 20 commits in two days just trying to get it to run.',
    investigation:
      'I went through it with my mentor and a classmate named Rizqi who ended up opening a pull request to help fix the failing test cases and runners. We found that the JUnit version was conflicting with the Cucumber runner setup, the report output paths were wrong for how CI handled directories, and some dependencies were under the wrong scope in build.gradle. None of these errors were obvious on their own, but they were all connected.',
    solution:
      'Fixed the Gradle config to use the right JUnit runner for Cucumber, corrected the HTML report plugin paths to include the full file path so CI would not throw ENOTDIR, and sorted out the dependency scopes. Merged Rizqi\'s PR, did a few more fixes on the GitHub Actions workflow, and finally got a clean run.',
    outcome:
      'The project passed review and the CI pipeline ran green. But the bigger thing I took from this was about how I handle pressure. I kept spiraling instead of slowing down and reading the errors properly. Once I started treating each error one at a time instead of trying to fix everything at once, things started to move. And working through it with Rizqi showed me how much faster you get unstuck when you actually collaborate.',
  },
]
