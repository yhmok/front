import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export async function loadStudents() {
    try {
        const response = await axios.get("/students");
        return response.data;
    } catch (error) {
        alert('조회 에러: ' + (error instanceof Error ? error.message : error));
    }
}

export async function loadStudent(id) {
    try {
        const response = await axios.get("/students/" + id);
        return response.data;
    } catch (error) {
        alert('조회 에러: ' + (error instanceof Error ? error.message : error));
    }
}

export async function updateStudent(student) {
    try {
        await axios.put("/students/" + student.id, student);
    } catch (error) {
        alert('저장 에러: ' + (error instanceof Error ? error.message : error));
    }
}

export async function insertStudent(student) {
    try {
        await axios.post("/students/", student);
    } catch (error) {
        alert('저장 에러: ' + (error instanceof Error ? error.message : error));
    }
}

export async function deleteStudent(id) {
    try {
        await axios.delete("/students/" + id);
    } catch (error) {
        alert('삭제 에러: ' + (error instanceof Error ? error.message : error));
    }
}