<template>
  <div id="StudentEdit">
    <h1>학생 등록</h1>
    <div>
      <input type="text" v-model="student.studentNo" placeholder="학번" />
    </div>
    <div>
      <input type="text" v-model="student.name" placeholder="이름" />
    </div>
    <div>
      <input type="phone" v-model="student.phone" placeholder="전화번호" />
    </div>
    <div>
      <label
        ><input type="radio" value="남" v-model="student.sex" /> 남자</label
      >
      <label
        ><input type="radio" value="여" v-model="student.sex" /> 여자</label
      >
    </div>
    <div>
      <input type="email" v-model="student.email" placeholder="이메일" />
    </div>

    <div>
      <select v-model="student.departmentId">
        <option value="undefined">학과를 선택하세요</option>
        <option value="1">소프</option>
        <option value="2">컴공</option>
        <option value="3">정통</option>
        <option value="4">글티</option>
      </select>
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template>

<script>
import { insertStudent } from "../studentService";

export default {
  name: "StudentCreateView",
  data() {
    return {
      student: {},
    };
  },
  methods: {
    async save() {
      await insertStudent(this.student);

      this.goList();
    },
    goList() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
input[type="text"],
input[type="phone"],
input[type="email"] {
  padding: 6px;
  width: 200px;
}

select {
  padding: 6px;
  width: 150px;
}

div {
  margin-bottom: 15px;
}

label {
  margin-right: 15px;
}

button {
  padding: 5px 20px;
  margin-right: 10px;
}
</style>