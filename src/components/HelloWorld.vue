<script setup>
import { ref, onMounted } from 'vue'

const promptText = ref('') // To store user input
const submittedPrompts = ref([]) // To store submitted prompts

// List of predefined prompts
const initialPrompts = [
  'prompt1',
  'prompt2',
  'prompt3',
  'prompt4',
  'prompt5',
  'prompt6',
  'prompt7',
  'prompt8',
  'prompt9',
  'prompt10'
]

// Load the initial prompts when the component is mounted
onMounted(() => {
  submittedPrompts.value = initialPrompts
})

// Function to submit the prompt
const submitPrompt = () => {
  if (promptText.value.trim() !== '') { // Check if the prompt is not empty
    submittedPrompts.value.push(promptText.value) // Add the prompt to the list
    promptText.value = '' // Clear the input field
  }
}

// Function to set the selected prompt in the text area
const selectPrompt = (prompt) => {
  promptText.value = prompt // Replace the text area content with the selected prompt
}
</script>

<template>
  <div class="container mt-5">
    <!-- Title -->
    <div class="row">
      <div class="col-12 text-center">
        <h1>Prompt Selector</h1>
      </div>
    </div>

    <!-- Predefined Prompt Buttons -->
    <div class="row mt-4 justify-content-center">
      <div class="col-md-8">
        <h3 class="text-center">Select a Prompt:</h3>
        <div class="d-flex flex-wrap justify-content-center">
          <button
            v-for="(prompt, index) in initialPrompts"
            :key="index"
            class="btn btn-outline-secondary m-2"
            @click="selectPrompt(prompt)"
          >
            {{ prompt }}
          </button>
        </div>
      </div>
    </div>

    <!-- Text Area for Entering Prompt -->
    <div class="row mt-4 justify-content-center">
      <div class="col-md-6">
        <textarea
          v-model="promptText"
          id="prompt"
          class="form-control"
          rows="4"
          placeholder="Enter your prompt..."
        ></textarea>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="row mt-3 justify-content-center">
      <div class="col-md-6 text-center">
        <button type="button" class="btn btn-primary btn-lg w-100" @click="submitPrompt">
          Submit
        </button>
      </div>
    </div>

    <!-- List of Submitted Prompts -->
    <div class="row mt-5 justify-content-center" v-if="submittedPrompts.length">
      <div class="col-md-6">
        <h3 class="text-center">Submitted Prompts:</h3>
        <ul class="list-group mt-3">
          <li v-for="(prompt, index) in submittedPrompts" :key="index" class="list-group-item">
            {{ index + 1 }}. {{ prompt }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for better appearance */
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

textarea {
  font-size: 1.2rem;
  padding: 10px;
}

.btn-lg {
  font-size: 1.5rem;
}

.list-group-item {
  font-size: 1.2rem;
}

.btn-outline-secondary {
  font-size: 1rem;
  padding: 10px 20px;
  white-space: normal; /* Allow long texts to break into new lines */
  text-align: left;
  min-width: 300px; /* Minimum size to ensure the buttons look good */
}

h3 {
  margin-bottom: 20px;
}
</style>
