<template>
    <div v-if="isVisible" :class="$style.signUpPopUp">
      <b :class="$style.whichBestDescribes">Which best describes your role?</b>
  
      <!-- Popup Content -->
      <div :class="$style.frameParent">
        <div :class="$style.frameGroup">
          <div :class="$style.studentWrapper" @click="navigateToStudentPage">
            <div :class="$style.student">Student</div>
          </div>
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('Instructor')">
            <div :class="$style.student">Instructor</div>
          </div>
        </div>
        <div :class="$style.frameContainer">
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('Dispatch')">
            <div :class="$style.student">Dispatch</div>
          </div>
          <div :class="$style.maintenanceWrapper">
            <div :class="$style.student">Maintenance</div>
          </div>
        </div>
        <div :class="$style.frameGroup">
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('Admin')">
            <div :class="$style.student">Admin</div>
          </div>
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('Lender')">
            <div :class="$style.student">Lender</div>
          </div>
        </div>
        <div :class="$style.frameGroup">
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('Owner')">
            <div :class="$style.student">Owner</div>
          </div>
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('Airline')">
            <div :class="$style.student">Airline</div>
          </div>
        </div>
        <div :class="$style.frameGroup">
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('DPE')">
            <div :class="$style.student">DPE</div>
          </div>
          <div :class="$style.studentWrapper" @click="onFrameContainerClick('Medical')">
            <div :class="$style.student">Medical</div>
          </div>
        </div>
      </div>
  
      <!-- Vector icon as close button -->
      <img 
        :class="$style.vectorIcon" 
        alt="Close" 
        src="@/assets/close-icon.svg" 
        @click="closePopup" 
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'SignUpPopUp',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const router = useRouter();
    const route = useRoute();

    const navigateToStudentPage = () => {
      // Navigate to the student page
      router.push('/student-create-account');
    };

    const closePopup = () => {
      emit('close');
    };

    // Watch for route changes to close the popup automatically
    watch(() => route.path, () => {
      closePopup();
    });

    return {
      navigateToStudentPage,
      closePopup,
    };
  },
});
  </script>
  
  <style module scoped>
  .whichBestDescribes {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 0;
  }
  
  .student {
    position: relative;
  }
  
  .studentWrapper {
    flex: 1;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.05);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    box-sizing: border-box;
    cursor: pointer;
  }
  
  .frameGroup {
    width: 640px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }
  
  .maintenanceWrapper {
    flex: 1;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.05);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    box-sizing: border-box;
  }
  
  .frameContainer {
    width: 640px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
  }
  
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    z-index: 1;
    font-size: 18px;
  }
  
  .vectorIcon {
    width: 20px; 
    position: absolute;
    margin: 0 !important;
    top: 10px;
    right: 10px;
    height: 20px;
    cursor: pointer;
    z-index: 2;
  }
  
  .signUpPopUp {
  width: 100%;
  max-width: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 30px 50px;
  box-sizing: border-box;
  gap: 20px;
  text-align: left;
  font-size: 25px;
  color: #404040;
  font-family: Helvetica;
  z-index: 9999;
}
  </style>
  