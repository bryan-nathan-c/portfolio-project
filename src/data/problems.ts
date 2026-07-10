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
      'My final project was supposed to be the big one. Full automation framework, UI tests, API tests, running on GitHub Actions. I thought I was ready. Then I ran it and nothing worked. The build failed, the tests did not run, the reports crashed. I kept pushing fixes and kept breaking something else. At some point I had made over 20 commits and still had nothing to show.',
    investigation:
      'I talked with my mentor and went through it with a classmate named Rizqi. He actually opened a pull request to help me fix the broken test runners. We found a few things all happening at the same time: the JUnit version was clashing with Cucumber, the report file paths were set up wrong so CI kept throwing errors, and some libraries were in the wrong place in the build file. None of it was obvious until we sat down and looked at it together.',
    solution:
      'Fixed the build config, corrected the report paths, moved the libraries to the right place, and merged what Rizqi sent. Then cleaned up the GitHub Actions file. Finally got everything green.',
    outcome:
      'It passed. But honestly the biggest thing I got from this was realizing that when I am stressed I stop thinking straight. I was trying to fix ten things at once and making it worse. Once I slowed down and just focused on one thing at a time, it started working. And Rizqi helping made a huge difference too.',
  },
]
