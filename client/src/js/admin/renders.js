

async function renderStudentInfo(id){
    const container = document.getElementById('students-info-container');
    const res = await fetchData(`student_personal_info/${id}`);
    const  userStudentId = document.getElementById('user_student_id');
  
    userStudentId.value = id;

    const data = res.data[0];
    if(!data) return;
    const HTML = Object.entries(data)
      .map(([key, value]) => {
        // Skip the student_personal_id field
        if (key === 'student_personal_id') {
          return '';
        }
        if (key === 'course') {
            return '';
          }

        let formattedValue = value;
        if (key === 'date_of_birth') {
          value = formatter.formatDate(value);
        }
  
        return `
              <div class="input-group flex flex-col w-1/5 px-2 py1 gap-1 mb-6">
                <label for="" class="font-bold">${formatter.capitalizeFirstLetter(key)}</label>
              <p>${value}</p>
              </div>
        `;
      })
      .join('');
  
    container.innerHTML = HTML;
}


async function renderPendingApplicants(){
  const container = document.getElementById('pending-students');
  const res = await fetchData('students');

  const data = res.data;
  const filteredData = data.filter(row => row.status === 'pending');

  const HTML = (await Promise.all(filteredData.map(async (student) => {
    // Fetch personal information using the user_id
    const personalInfoRes = await fetchData(`student_personal_info/${student.user_id}`);
    const personalInfo = personalInfoRes.data[0]; // Assuming 'data' is the personal information
    const fullname = truncate(
      formatter.capitalizeFirstLetter(`${personalInfo.first_name} ${personalInfo.middle_name} ${personalInfo.last_name}`),
      15
    );
    // Now you can use 'personalInfo' in your HTML
    return `
      <div
        data-modal-target="enroll-student"
        data-pending-student-id="${student.user_id}"
        class="pending-student flex flex-items justify-between px-6 py-2 bg-accents hover:bg-accents/90 cursor-pointer rounded-lg"
      >
        <p class="font-bold">
          Student id: <span class="text-primary">${student.student_id}</span>
        </p>
        <p class="font-bold">
        Full name:
        <span class="text-primary truncate">
         ${fullname}
        </span>
      </p>
        <p class="font-bold">
          Status: <span class="text-primary">Pending</span>
        </p>
        <p class="font-bold">
          Course: <span class="text-primary text-sm">${personalInfo.course}</span>
        </p>
      </div>
    `;
  }))).join("");
  
  
  container.innerHTML = HTML;

  const modalsToggler = document.querySelectorAll('[data-pending-student-id]');

  modalsToggler.forEach(toggler=>{
    toggler.addEventListener('click',async ()=>{
      const id = toggler.dataset.pendingStudentId;
      const modalType = toggler.dataset.modalTarget;
     await renderStudentInfo(id)
      toggleModal(modalType);
      
    })
  })



}

async function renderEnrolledApplicants(){
  const container = document.getElementById('enrolled-students');
  const res = await fetchData('students');

  const data = res.data;
  const filteredData = data.filter(row => row.status === 'enrolled');

  const HTML = (await Promise.all(filteredData.map(async (student) => {

    const personalInfoRes = await fetchData(`student_personal_info/${student.user_id}`);
    const personalInfo = personalInfoRes.data[0]; 
    const fullname = truncate(
      formatter.capitalizeFirstLetter(`${personalInfo.first_name} ${personalInfo.middle_name} ${personalInfo.last_name}`),
      15
    );

    return `
      <div
        data-modal-target="enroll-student"
        data-pending-student-id="${student.user_id}"
        class="pending-student flex flex-items justify-between px-6 py-2 bg-accents hover:bg-accents/90 cursor-pointer rounded-lg"
      >
        <p class="font-bold">
          Student id: <span class="text-primary">${student.student_id}</span>
        </p>
        <p class="font-bold">
        Full name:
        <span class="text-primary truncate">
         ${fullname}
        </span>
      </p>
        <p class="font-bold">
          Status: <span class="text-primary">Enrolled</span>
        </p>
        <p class="font-bold">
          Course: <span class="text-primary text-sm">${personalInfo.course}</span>
        </p>
      </div>
    `;
  }))).join("");
  
  
  container.innerHTML = HTML;

  const modalsToggler = document.querySelectorAll('[data-pending-student-id]');

  modalsToggler.forEach(toggler=>{
    toggler.addEventListener('click',async ()=>{
      const id = toggler.dataset.pendingStudentId;
      const modalType = toggler.dataset.modalTarget;
     await renderStudentInfo(id)
      toggleModal(modalType);
      
    })
  })


}

function renderAll(){
  renderPendingApplicants()
  renderEnrolledApplicants();
  renderTotalStudents();
}

renderAll()

function truncate(fullName, maxLength) {
  return fullName.length > maxLength
    ? `${fullName.substring(0, maxLength)}...`
    : fullName;
}

async function renderTotalStudents(){
  const wrapper = document.querySelectorAll('[data-info="total-students"]')

  const res = await fetchData('students');
  const data = res.data.length

  wrapper.forEach(wrap =>{
      wrap.innerText = data;
  })
}