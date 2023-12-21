const personalWrapper = document.getElementById('personal-wrapper')


async function loadSelectCourse(){
    const container = document.getElementById('courses-select');
    const res = await fetchData('courses');

    const data = res.data;
    console.log(data)
    const HTML = await data
      .map(
        (course) => `
        <option value="${course.course_name}" data-course-id="${course.course_id}">${course.course_name}</option>
      `
      )
      .join("");
  
    container.innerHTML = HTML;
  
}
async function loadPersonalInfo() {
    const container = document.getElementById('personal-wrapper');
    const res = await fetchData('student_personal_info/5');
   

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
          // Assuming you have a formatDate function
          formattedValue = formatter.formatDate(value, 'long'); // 'long' can be changed based on your requirements
        }
  
        return `
          <div class="container flex-1 bg-secondary py-4 px-2 flex items-center gap-8 min-w-[20rem] rounded-md"> 
            <h3 class="text-gray-600 border-r border-gray-600 pr-2">${formatter.capitalizeFirstLetter(key)}</h3>
            <p class="font-bold" id="personal-full-name">${formattedValue}</p>
          </div>
        `;
      })
      .join('');
  
    container.innerHTML = HTML;
  }
  
  



async function renderPersonalInformation(){
    const res = await fetchData('student_personal_info/5')
    

}

function renderAll(){
    loadSelectCourse();
    loadPersonalInfo();
}

renderAll()

