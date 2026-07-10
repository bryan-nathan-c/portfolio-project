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
      'My final project at JayJay took weeks longer than it should have. I was stressed, stuck, and spiraling. What got me through was not a breakthrough moment, it was just deciding to stop panicking and start moving.',
    category: 'Mindset',
    context: 'JayJay, final project',
    tags: ['JayJay', 'Final Project', 'Growth', 'Consistency', 'Problem Solving'],
    problem:
      'My final project at JayJay was supposed to wrap up everything I had learned about QA automation. Instead it became the hardest thing I had done. I kept running into errors I could not explain, and the more I failed the more I panicked. I was spending more time imagining all the ways it could go wrong than actually fixing anything.',
    investigation:
      'I talked to my mentor and some classmates about it. They helped me see that I was trying to solve everything at once instead of breaking it down. One of my classmates told me to just pick one error and ignore the rest for now. That advice actually changed how I approached the whole thing.',
    solution:
      'I slowed down. I stopped trying to solve everything at once and just picked one error, fixed it, then moved to the next. Consistency over intensity. Some days I made almost no progress, but I kept showing up. That was the whole thing.',
    outcome:
      'I finished the project and it passed review. But what I actually got out of it was bigger than that. I learned that grit is not about being fearless, it is about keep going even when you are scared. And I learned to stop stressing about the future and just live in what is actually in front of me right now.',
  },
]
