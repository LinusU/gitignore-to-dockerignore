import assert from 'node:assert'

import { convertToDockerignore } from './index.js'

function test (input, expected) {
  assert.strictEqual(convertToDockerignore(input.trim()), expected.trim())
}

/* Node.js */
test(`
/node_modules/
/npm-debug.log
`, `
.git/
node_modules/
npm-debug.log
`)

/* Java */
test(`
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
`, `
.git/
# Compiled class file
**/*.class

# Log file
**/*.log

# BlueJ files
**/*.ctxt

# Mobile Tools for Java (J2ME)
**/.mtj.tmp/

# Package Files #
**/*.jar
**/*.war
**/*.nar
**/*.ear
**/*.zip
**/*.tar.gz
**/*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
**/hs_err_pid*
`)

/* Swift */
test(`
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## Build generated
build/
DerivedData/

## Various settings
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata/

## Other
*.moved-aside
*.xccheckout
*.xcscmblueprint

## Obj-C/Swift specific
*.hmap
*.ipa
*.dSYM.zip
*.dSYM

## Playgrounds
timeline.xctimeline
playground.xcworkspace

# Swift Package Manager
#
# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.
/Packages/
/Package.pins
/Package.resolved
/.build/

# CocoaPods
#
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
#
# Pods/
#
# Add this line if you want to avoid checking in source code from the Xcode workspace
# *.xcworkspace

# Carthage
#
# Add this line if you want to avoid checking in source code from Carthage dependencies.
/Carthage/Checkouts
/Carthage/Build

# fastlane
#
# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the
# screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control

/fastlane/report.xml
/fastlane/Preview.html
/fastlane/screenshots/**/*.png
/fastlane/test_output
`, `
.git/
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## Build generated
**/build/
**/DerivedData/

## Various settings
**/*.pbxuser
!**/default.pbxuser
**/*.mode1v3
!**/default.mode1v3
**/*.mode2v3
!**/default.mode2v3
**/*.perspectivev3
!**/default.perspectivev3
**/xcuserdata/

## Other
**/*.moved-aside
**/*.xccheckout
**/*.xcscmblueprint

## Obj-C/Swift specific
**/*.hmap
**/*.ipa
**/*.dSYM.zip
**/*.dSYM

## Playgrounds
**/timeline.xctimeline
**/playground.xcworkspace

# Swift Package Manager
#
# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.
Packages/
Package.pins
Package.resolved
.build/

# CocoaPods
#
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
#
# Pods/
#
# Add this line if you want to avoid checking in source code from the Xcode workspace
# *.xcworkspace

# Carthage
#
# Add this line if you want to avoid checking in source code from Carthage dependencies.
Carthage/Checkouts
Carthage/Build

# fastlane
#
# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the
# screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control

fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots/**/*.png
fastlane/test_output
`)
