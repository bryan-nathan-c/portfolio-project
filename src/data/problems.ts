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
      'Everything looked fine but the tests kept failing. Turned out one line of code was pointing to the wrong place the whole time.',
    category: 'Test Automation',
    context: 'JayJay, framework project',
    tags: ['Cucumber', 'Selenium', 'Java', 'Import', 'Package'],
    problem:
      'I was building my first automation framework at JayJay. I wrote all the page classes, connected everything up, and ran the tests. But Java kept saying it could not find LoginPage. I could literally see the file sitting there. I had no idea what was going on.',
    investigation:
      'I asked my mentor and searched online but the answers I got were too general. I went back to my mentor again with more details and he pointed me to the import section. That is when I actually stopped and read the import line properly. It said import com.nathan.pages.LoginPage but my project was not using that package at all. That line was left over from a different project I had worked on before.',
    solution:
      'Changed the import to match the actual package in this project. One line fix. That was it.',
    outcome:
      'Tests ran right away. I felt pretty dumb honestly, but I learned that when nothing makes sense you just have to slow down and read everything again like you are seeing it for the first time.',
  },
  {
    id: 'webdrivermanager-version-conflict',
    title: 'Chrome Kept Crashing Before Any Test Could Even Start',
    summary:
      'Every time I ran the tests, Chrome crashed immediately. The code looked fine. It took me days of digging through docs with a classmate to find out the problem was in how I set up the dependencies.',
    category: 'Build and Dependencies',
    context: 'JayJay, final project setup',
    tags: ['Gradle', 'WebDriverManager', 'Selenium', 'Dependencies', 'Java'],
    problem:
      'I set up my second project and ran the tests. Chrome opened for a second and then immediately crashed. The error said SessionNotCreatedException. I had no idea what that meant. The code looked exactly the same as my previous project so I knew the test logic was not the issue. Something in the setup was off but I could not see what.',
    investigation:
      'Me and a classmate went through forums and docs together. We kept trying different things but nothing worked. After a few days I decided to just actually read the WebDriverManager and Selenium docs properly side by side instead of skimming for a quick answer. That is when I found it. The two libraries needed to be specific versions to work together, and I had also put WebDriverManager in the wrong place in build.gradle, so the driver was not even available when the tests ran.',
    solution:
      'Moved WebDriverManager to the right scope in build.gradle and matched the version numbers to what the docs said was compatible. Ran the tests again and Chrome opened fine.',
    outcome:
      'Everything worked. Honestly the fix was not that complicated, I just had not been patient enough to actually read properly before. That was the lesson.',
  },
  {
    id: 'final-project-jayjay',
    title: 'Two Weeks of Being Lost, Then Finally Getting It',
    summary:
      'My final project kept breaking in ways I did not understand. The build failed, CI failed, and I made over 20 commits in two days just trying to get it to run. But I got through it.',
    category: 'Mindset',
    context: 'JayJay, final project',
    tags: ['JayJay', 'Final Project', 'Growth', 'Consistency', 'Problem Solving'],
    problem:
      'My final project at JayJay was a full automation framework with UI tests, API tests, and a GitHub Actions pipeline. The code was fine but the project would not build. Gradle kept failing to resolve things, the Cucumber runners were not picking up the right tests, and the reports were throwing some ENOTDIR error in CI. Every time I fixed one thing, something else broke. I was making commit after commit and going nowhere.',
    investigation:
      'I talked through it with my mentor and a classmate named Rizqi. He ended up opening a pull request to help fix the failing test cases and runners. Together we figured out that the JUnit version was clashing with the Cucumber setup, the report paths were wrong for how CI handles directories, and some dependencies were in the wrong scope. None of them were obvious on their own but once we connected the dots it made sense.',
    solution:
      'Fixed the Gradle config, corrected the report file paths so CI would not throw errors, sorted out the scopes, and merged Rizqi\'s PR. Then cleaned up the GitHub Actions workflow. Finally got a green run.',
    outcome:
      'Project passed review. But more than that I learned that when I am stuck and stressed I stop thinking clearly. Once I started dealing with one error at a time instead of panicking about all of them, things moved. And honestly having Rizqi to work through it with made a huge difference.',
  },
]
