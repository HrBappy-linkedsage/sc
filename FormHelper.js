/**
 * @param {object} values
 * @return {FormData} data
 * @name formData
 * @desc It help to convert form value to FormData type
 */
export function formData(values) {
    console.log("FORM DATA=========", values);
    if(!values.file && values.file == null) values.file = ""

    const data = new FormData()
    Object.keys(values).forEach((key) => {
        if (Array.isArray(values[key])) {
            values[key].map(item => {
                
                data.append(key, JSON.stringify(item))
            })
        }
         else {
             if(values[key] != null || values[key] != undefined)
                data.append(key, values[key])
        }

    })

    console.log("vvll",data)
    return data
}

