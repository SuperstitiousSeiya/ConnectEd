
const formatter = {
    capitalizeFirstLetter: (input) =>{
        if (typeof input !== 'string' || input.length === 0) {
            return input;
        }
        

        const cap = input.charAt(0).toUpperCase() + input.slice(1);
        return cap.replace(/[-_]/g, ' ');
    },
    formatDate: (dateString, format) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
        // Assuming dateString is in a valid format, adjust as needed
        const date = new Date(dateString);
        
        return date.toLocaleDateString(undefined, options);
      },


}

