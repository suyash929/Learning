const fs = require('fs');
let data;

fs.readFile('./homeTask2/data.json', (errRead, jsonString) => { // read data from file
    if (errRead) {
        console.log('Error reading file from disk:', errRead);
        return;
    }
    try {
        data = JSON.parse(jsonString);
    } catch (errParsing) {
        console.log('Error parsing JSON string:', errParsing);
    }
});

const getData = (uid) => {// get data using id
    return data.filter(obj => obj.id === uid && !obj.isDeleted);
};

const postData = (reqBody) => {
    let id = 0;
    data.map(uid => {
        if (parseInt(uid.id, 10) > id) {
            id = parseInt(uid.id, 10);
        }
    });
    const newObj = {
        id : `${id + 1}`,
        login : reqBody.login,
        password : reqBody.password,
        age : reqBody.age,
        isDeleted : false
    };
    data.push(newObj);
    fs.writeFile('./homeTask2/data.json', JSON.stringify(data), err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
    return data;
};

const putData = (body) => { // update data
    const { id, login, password, age } = body;

    const index = data.findIndex(obj => obj.id === id);
    let updateData = data[index];

    if (login) {
        updateData = { ...updateData, login };
    }
    if (password) {
        updateData = { ...updateData, password };
    }
    if (age) {
        updateData = { ...updateData, age };
    }

    data[index] = updateData;
    fs.writeFile('./homeTask2/data.json', JSON.stringify(data), err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
    return data[index];
};

const deleteData = (uid) => { // delete data using id and update in file
    const newData = data.map(delObj => {
        if (delObj.id === uid) {
            delObj.isDeleted = true;
        }
        return data;
    });
    fs.writeFile('./homeTask2/data.json', JSON.stringify(newData), err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
    return newData;
};

module.exports = {
    getData,
    postData,
    putData,
    deleteData
};
