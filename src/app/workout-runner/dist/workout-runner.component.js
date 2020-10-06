"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WorkoutRunnerComponent = void 0;
var core_1 = require("@angular/core");
var model_1 = require("./model");
var WorkoutRunnerComponent = /** @class */ (function () {
    function WorkoutRunnerComponent() {
    }
    WorkoutRunnerComponent.prototype.ngOnInit = function () {
        this.workoutPlan = this.buildWorkout();
        this.restExercise = new model_1.ExercisePlan(new model_1.Exercise('rest', 'Relax!', 'Relax a bit', 'rest.png'), this.workoutPlan.restBetweenExercise);
        this.start();
    };
    WorkoutRunnerComponent.prototype.start = function () {
        this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
        this.currentExerciseIndex = 0;
        this.startExercise(this.workoutPlan.exercises[this.currentExerciseIndex]);
    };
    WorkoutRunnerComponent.prototype.pause = function () {
        clearInterval(this.exerciseTrackingInterval);
        this.workoutPaused = true;
    };
    WorkoutRunnerComponent.prototype.resume = function () {
        this.startExerciseTimeTracking();
        this.workoutPaused = false;
    };
    WorkoutRunnerComponent.prototype.pauseResumeToggle = function () {
        if (this.workoutPaused) {
            this.resume();
        }
        else {
            this.pause();
        }
    };
    WorkoutRunnerComponent.prototype.onKeyPressed = function (event) {
        if (event.which === 80 || event.which === 112) { // 'p' or 'P' key to toggle pause and resume.
            this.pauseResumeToggle();
        }
    };
    WorkoutRunnerComponent.prototype.startExercise = function (exercisePlan) {
        this.currentExercise = exercisePlan;
        this.exerciseRunningDuration = 0;
        this.startExerciseTimeTracking();
    };
    WorkoutRunnerComponent.prototype.startExerciseTimeTracking = function () {
        var _this = this;
        this.exerciseTrackingInterval = window.setInterval(function () {
            if (_this.exerciseRunningDuration >= _this.currentExercise.duration) {
                clearInterval(_this.exerciseTrackingInterval);
                var next = _this.getNextExercise();
                if (next) {
                    if (next !== _this.restExercise) {
                        _this.currentExerciseIndex++;
                    }
                    _this.startExercise(next);
                }
                else {
                    console.log('Workout complete!');
                }
                return;
            }
            ++_this.exerciseRunningDuration;
            --_this.workoutTimeRemaining;
        }, 1000);
    };
    WorkoutRunnerComponent.prototype.getNextExercise = function () {
        var nextExercise = null;
        if (this.currentExercise === this.restExercise) {
            nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1];
        }
        else if (this.currentExerciseIndex < this.workoutPlan.exercises.length - 1) {
            nextExercise = this.restExercise;
        }
        return nextExercise;
    };
    WorkoutRunnerComponent.prototype.buildWorkout = function () {
        var workout = new model_1.WorkoutPlan('7MinWorkout', '7 Minute Workout', 10, []);
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('jumpingJacks', 'Jumping Jacks', 'A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.', 'JumpingJacks.png', 'jumpingjacks.wav', "Assume an erect position, with feet together and arms at your side. <br>\n                            Slightly bend your knees, and propel yourself a few inches into the air. <br>\n                            While in air, bring your legs out to the side about shoulder width or slightly wider. <br>\n                            As you are moving your legs outward, you should raise your arms up over your head; arms should be\n                            slightly bent throughout the entire in-air movement. <br>\n                            Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent", ['dmYwZH_BNd0', 'BABOdJ-2Z6o', 'c4DAnQ6DtF8']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('wallSit', 'Wall Sit', 'A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.', 'wallsit.png', 'wallsit.wav', "Place your back against a wall with your feet shoulder width apart and a little ways out from the wall.\n          Then, keeping your back against the wall, lower your hips until your knees form right angles.", ['y-wV4Venusw', 'MMV3v4ap4ro']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('pushUp', 'Push up', 'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms', 'Pushup.png', 'pushups.wav', "Lie prone on the ground with hands placed as wide or slightly wider than shoulder width.\n          Keeping the body straight, lower body to the ground by bending arms at the elbows.\n          Raise body up off the ground by extending the arms.", ['Eh00_rniF8E', 'ZWdBqFLNljc', 'UwRLWMcOdwI', 'ynPwl6qyUNM', 'OicNTT2xzMI']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('crunches', 'Abdominal Crunches', 'The basic crunch is a abdominal exercise in a strength-training program.', 'crunches.png', 'crunches.wav', "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.\n          Place your hands behind your head so your thumbs are behind your ears.\n          Hold your elbows out to the sides but rounded slightly in.\n          Gently pull your abdominals inward.\n          Curl up and forward so that your head, neck, and shoulder blades lift off the floor.\n          Hold for a moment at the top of the movement and then lower slowly back down.", ['Xyd_fa5zoEU', 'MKmrqcoCZ-M']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('stepUpOntoChair', 'Step Up Onto Chair', 'Step exercises are ideal for building muscle in your lower body.', 'stepUpOntoChair.png', 'stepup.wav', "Position your chair in front of you.\n          Stand with your feet about hip width apart, arms at your sides.\n          Step up onto the seat with one foot, pressing down while bringing your other foot up next to it.\n          Step back with the leading foot and bring the trailing foot down to finish one step-up.", ['aajhW7DD1EA']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('squat', 'Squat', 'The squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips, buttocks and quads.', 'squat.png', 'squats.wav', "Stand with your head facing forward and your chest held up and out.\n              Place your feet shoulder-width apart or little wider. Extend your hands straight out in front of you.\n              Sit back and down like you're sitting into a chair. Keep your head facing straight as your upper body bends forward a bit.\n              Rather than allowing your back to round, let your lower back arch slightly as you go down.\n              Lower down so your thighs are parallel to the floor, with your knees over your ankles. Press your weight back into your heels.\n              Keep your body tight, and push through your heels to bring yourself back to the starting position.", ['QKKZ9AGYTi4', 'UXJrBgI2RxA']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('tricepdips', 'Tricep Dips On Chair', 'A body weight exercise that targets triceps.', 'tricepdips.png', 'tricepdips.wav', "Sit up on a chair. Your legs should be slightly extended, with your feet flat on the floor.\n          Place your hands edges of the chair. Your palms should be down, fingertips pointing towards the floor.\n          Without moving your legs, bring your glutes forward off the chair.\n          Steadily lower yourself. When your elbows form 90 degrees angles, push yourself back up to starting position.", ['tKjcgfu44sI', 'jox1rb5krQI']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('plank', 'Plank', "The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that\n          involves maintaining a difficult position for extended periods of time.", 'Plank.png', 'plank.wav', "Get into pushup position on the floor.\n          Bend your elbows 90 degrees and rest your weight on your forearms.\n          Your elbows should be directly beneath your shoulders, and your body should form a straight line from head to feet.\n          Hold this position.", ['pSHjTRCQxIw', 'TvxNkmjdhMM']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('highKnees', 'High Knees', 'A form exercise that develops strength and endurance of the hip flexors and quads and stretches the hip extensors.', 'highknees.png', 'highknees.wav', "Start standing with feet hip-width apart.\n          Do inplace jog with your knees lifting as much as possible towards your chest.", ['OAJ_J3EZkdY', '8opcQdC-V-U']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('lunges', 'Lunges', "Lunges are a good exercise for strengthening, sculpting and building several muscles/muscle groups,\n          including the quadriceps (or thighs), the gluteus maximus (or buttocks) as well as the hamstrings.", 'lunges.png', 'lunge.wav', "Start standing with feet hip-width apart.\n              Do inplace jog with your knees lifting as much as possible towards your chest.", ['Z2n58m2i4jg']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('pushupNRotate', 'Pushup And Rotate', 'A variation of pushup that requires you to rotate.', 'pushupNRotate.png', 'pushupandrotate.wav', "Assume the classic pushup position, but as you come up, rotate your body so your right arm lifts up and extends overhead.\n          Return to the starting position, lower yourself, then push up and rotate till your left hand points toward the ceiling.", ['qHQ_E-f5278']), 30));
        workout.exercises.push(new model_1.ExercisePlan(new model_1.Exercise('sidePlank', 'Side Plank', 'A variation to Plank done using one hand only.', 'sideplank.png', 'sideplank.wav', "Lie on your side, in a straight line from head to feet, resting on your forearm.\n          Your elbow should be directly under your shoulder.\n          With your abdominals gently contracted, lift your hips off the floor, maintaining the line.\n          Keep your hips square and your neck in line with your spine. Hold the position.", ['wqzrb67Dwf8', '_rdfjFSFKMY']), 30));
        return workout;
    };
    WorkoutRunnerComponent = __decorate([
        core_1.Component({
            selector: 'abe-workout-runner',
            templateUrl: './workout-runner.component.html',
            styles: []
        })
    ], WorkoutRunnerComponent);
    return WorkoutRunnerComponent;
}());
exports.WorkoutRunnerComponent = WorkoutRunnerComponent;
