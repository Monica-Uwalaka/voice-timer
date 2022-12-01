# Project Requirements

## Executive Summary
VoiceTimer is a timer application that measures a specific time interval entered by a user. VoiceTimer will provide users with the ability to control their timer using their voice. This product will be compatible with any device with a web browser.

## Project Glossary
-**Timer** -Timer 
-**Duration** -Duration
-**Set** -Set
-**Running** -Running
-**Paused** -Paused
-**Canceled** -Canceled
-**Alert** -Alert
-**Start** -Start
-**Latest duration** -

## User Stories

### User 

#### US 1 - Set Timer 
> **As**a user**I want**be able to set the duration for the timer**so that**I can start the timer.

> **Acceptance Criteria**

>- The user cannot start the timer if the timer is not set.
>- The user cannot cancel timer if the timer is not set.
>- The user cannot pause timer if the timer is not set.
>- The user cannot resume timer if the timer is not set.
>- The user can set the timer by using entering the duration using a voice command.
>- The user can set the timer by entering the duration manually through their device's screen.


#### US 2 - Start Timer 
> **As** a user**I want**be able to start a timer**so that**the timer can start running

> **Acceptance Criteria**

>- The timer can only be started if it has been set.
>- The user can start the timer manually or by voice command.
>- The duration decreases by 1 every second.


#### US 3 - Pause Timer 
> **As**a user**I want**be able to pause the running timer**so that**the timer stops running.

> **Acceptance Criteria**

>- The timer can only be paused if it is running.
>- The duration left for the timer stays the same and the duration stops decreasing by 1 every second.
>- The user can pause the timer manually or by voice command.


#### US 4 - Resume Timer 
> **As**user**I want**to be able to resume a paused timer**so that**the duration continues to decrease

> **Acceptance Criteria**

>- The timer can only be resumed if it is running and is paused.
>- The duration decreases by 1 every second.
>- The user can resume the timer manually or by voice command.


#### US 5 - Cancel Timer 
> **As**user**I want**to be able to cancel a running timer**so that** the timer stops running.

> **Acceptance Criteria**
>- The timer duration is reset the to the last set duration.
>- The timer stops running.
>- The user can cancel the timer manually or by voice command.


#### US 6.01 - End Alert sound
**As**user**I want**to be able to set an alert sound**so that**so that I know when the timer has ended.

> **Acceptance Criteria**

>- The timer timer duration has been completed.



## MoSCoW

### Must Have
- US 1 - Set Timer 
- US 2 - Start Timer
- US 3 - Pause Timer
- US 4 - Resume Timer 
- US 5 - Cancel Timer
- US 6.01 - End Alert sound

### Should have 
- None

### Could Have
- None

### Would Like to Have But won't Get
- None

## Similar Products

### Iphone Timer
#### Descriptions 
The timer application that comes with an Iphone is used to measure time intervals.

#### Similarity
The inspiration for VoiceTimer comes from the ability for Iphone timers to be controlled by Siri.


## Technical Resources


### Backend: 
### Documentation: MkDocs 
- [Deploy Your Docs - MkDocs Document](https://www.mkdocs.org/user-guide/deploying-your-docs/)


### Frontend:



