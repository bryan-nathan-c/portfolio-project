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
      'Everything looked fine but the tests kept failing. Turned out one line was pointing to the wrong place the whole time.',
    category: 'Test Automation',
    context: 'JayJay, framework project',
    tags: ['Cucumber', 'Selenium', 'Java', 'Import', 'Package'],
    problem:
      'I was building my first automation framework at JayJay. Wrote all the page classes, connected everything, and ran the tests. But Java kept saying it could not find LoginPage. I could literally see the file right there. I had no clue what was happening.',
    investigation:
      'I Googled the error and asked AI but kept getting answers that were too general to help. I went back to my mentor with more details and he pointed me toward the import at the top of the file. That is when I actually stopped and read it properly. It said import com.nathan.pages.LoginPage, but that package did not even exist in this project. That line was copied over from a different repo I had worked on before and I never noticed.',
    solution:
      'Changed the import to match the actual package in this project. One line. That was literally it.',
    outcome:
      'Tests ran immediately. I felt kind of dumb but I got a really useful lesson out of it. When nothing makes sense, stop trying to think your way through it and just read the code slowly like you have never seen it before.',
  },
  {
    id: 'webdrivermanager-version-conflict',
    title: 'Chrome Kept Crashing Before Any Test Could Even Start',
    summary:
      'Every time I ran the tests, Chrome crashed right away. The code looked fine. It took days of going back and forth with AI and asking around before I finally found what was wrong.',
    category: 'Build and Dependencies',
    context: 'JayJay, final project setup',
    tags: ['Gradle', 'WebDriverManager', 'Selenium', 'Dependencies', 'Java'],
    problem:
      'Set up my second project and hit run. Chrome opened for maybe a second and then just crashed. The error said SessionNotCreatedException and I had no idea what that meant. The code structure was basically the same as my last project so I knew the tests themselves were not the problem. Something in the setup was broken but I could not figure out what.',
    investigation:
      'I tried asking AI and Googled the error but kept getting answers that did not quite fit my setup. After a few days of going back and forth I just decided to actually sit down and go through the WebDriverManager and Selenium setup guides properly, side by side. That is when it clicked. The two libraries needed to be on matching versions to work together, and on top of that I had placed WebDriverManager in the wrong section of build.gradle, which meant the driver was not even loaded when the tests ran.',
    solution:
      'Moved WebDriverManager to the right section in build.gradle and updated the versions to ones that actually work together. Ran the tests again and Chrome opened without crashing.',
    outcome:
      'Everything worked after that. The actual fix was not even that hard. I just kept looking for a quick answer instead of slowing down and reading things properly. Took me way longer than it should have.',
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
      'I talked with my mentor and went through it with Rizqi, one of the mentors at JayJay. He actually opened a pull request to help me fix the broken test runners. We found a few things all happening at the same time: the JUnit version was clashing with Cucumber, the report file paths were set up wrong so CI kept throwing errors, and some libraries were in the wrong place in the build file. None of it was obvious until we sat down and looked at it together.',
    solution:
      'Fixed the build config, corrected the report paths, moved the libraries to the right place, and merged what Rizqi sent. Then cleaned up the GitHub Actions file. Finally got everything green.',
    outcome:
      'It passed. But the biggest thing I got from this was actually from working with Rizqi. Watching how calm and detail-oriented he was when going through the errors changed how I approached the whole thing. I stopped panicking and started actually reading. Once I slowed down and focused on one thing at a time, everything started moving. I would not have figured that out on my own.',
  },
]
