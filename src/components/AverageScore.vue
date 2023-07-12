<script setup lang="ts">
import { collection, addDoc, getDocs } from 'firebase/firestore'
import db from '../firebase/init.js'
import { reactive } from 'vue'
let isReady = false
const props = defineProps<{ score: number }>()

const colRef = collection(db, 'scores')
const score = {
    score: props.score
}

await addDoc(colRef, score)

const calcAverage = (async() => {
    let sum = 0
    let count = 0
    const docs = await getDocs(collection(db, 'scores'))
    docs.forEach((doc) => {
        sum += doc.data().score
        count += 1
    })
    return sum / count
})
const average = await calcAverage()
const rounded = Math.trunc(average)
const averageWidth = `${(rounded / 20) * 100}%`
const userScore = `${(score.score / 20) * 100}%`
console.log('average width' + averageWidth)
console.log('user score width' + userScore)
let avgZIndex = 0;
let userZIndex = 0;
let avgLeft = '';
let userLeft = '';
let theSame = '';

// if average is higher than score, score has higher z-index
if (rounded > score.score) {
    userZIndex = 2
    avgZIndex = 1
    userLeft = '30%'
    avgLeft = '95%'
} else if (rounded === score.score) {
    theSame = '(the same!)'
} else {
    userZIndex = 1
    avgZIndex = 2
    userLeft = '95%'
    avgLeft = '30%'
}

const averageStyle = reactive({
    // color: 'red',
    width: averageWidth,
    zIndex: avgZIndex,
})

const userStyle = reactive({
    // color: 'red',
    width: userScore,
    zIndex: userZIndex,
})

const averageTooltip = reactive({
    left: avgLeft,
})

const userTooltip = reactive({
    left: userLeft,
})
isReady = true
</script>


<template>
    <div class="meter-wrapper">
        <div class="meter" v-if="isReady === true">
            <span class="average-score" :style="averageStyle">
                <span class="tooltip" :style="averageTooltip">Average Score</span>
            </span>
            <span class="user-score" :style="userStyle">
                <span class="tooltip-lower" :style="userTooltip">Your Score {{ theSame }}</span>
            </span>
        </div>
    </div>
    <!-- <div class="score" v-if="isReady===true">
    <div class="max-score">
    </div>
    </div>
    <div class="inner-score" :width="averageWidth">

    </div> -->
</template>

<style scoped>

.meter-wrapper {
    height: 130px;
}
.tooltip{
        overflow: visible;
		position: absolute;
		left: 50%;
		bottom: 150%;
		margin-bottom: 1em;
		padding: 0.5rem;
		background-color: #141514;
        color: white;
		font-size: 1rem;
		line-height: 1.6;
		text-align: left;
		white-space: nowrap;
		transform: translate(-50%, 1em);
		transition: all .15s ease-in-out;
		&::before {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			width: 0;
			height: 0;
			border: .5em solid transparent;
			border-top-color: #141514;
			transform: translate(-50%, 0);
		}
	}

    .tooltip-lower {
        overflow: visible;
		position: absolute;
		left: 90%;
		top: 120%;
		margin-bottom: 1em;
		padding: 0.5rem;
		background-color: #141514;
        color: white;
		font-size: 1rem;
		line-height: 1.6;
		text-align: left;
		white-space: nowrap;
		transform: translate(-50%, 1em);
		transition: all .15s ease-in-out;
		&::before {
			content: '';
			position: absolute;
			bottom: 100%;
			left: 40%;
			width: 0;
			height: 0;
			border: .5em solid transparent;
			border-top-color: #141514;
			transform: scaleY(-1);
		}
	}

.meter {
  box-sizing: content-box;
  height: 20px; /* Can be anything */
  position: relative;
  /* margin: 60px 0 20px 0; Just for demo spacing */
  background: #e2e2e1;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  overflow: visible;
}

.average-score, .user-score {
  overflow: visible;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  width: 100%;
}

.average-score {
    background-color: rgb(46, 194, 43);
    background-image: linear-gradient(
    center bottom,
    rgb(43, 194, 83) 37%,
    rgb(84, 240, 84) 69%
  );
}

.user-score {
    background-color: rgb(153, 20, 236);
    background-image: linear-gradient(
    center bottom,
    rgb(89, 2, 94) 37%,
    rgb(63, 4, 99) 69%
  );
    top: -20px;
}
    .score {
        width: 100%;
        position: relative;
    }
    .max-score {
    position: absolute;
    width: 100%;
    background-color: blueviolet;
    height: 20px;
    border-radius: 15px;
}

    .inner-score {
    width: 50%;
    position: absolute;
    background-color: aquamarine;
    height: 20px;
    border-radius: 15px;
}
</style>
