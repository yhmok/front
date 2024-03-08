<template>
  <div id="StudentListView">
    <h1>학생 목록</h1>
    <button type="button" v-on:click="goCreate">등록</button>
    <table>
      <tr>
        <td>id</td>
        <td>학번</td>
        <td>이름</td>
        <td>전화</td>
        <td>성별</td>
        <td>이메일</td>
        <td>학과</td>
      </tr>

      <tr
        v-for="student in students"
        v-bind:key="student.id"
        v-on:click="goEdit(student.id)"
      >
        <td>{{ student.id }}</td>
        <td>{{ student.studentNo }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.phone }}</td>
        <td>{{ student.sex }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.departmentId }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { loadStudents } from '../studentService';

export default {
  name: "StudentListView",
  data() {
    return {
      students: [], // 여러건 조회 데이타
    };
  },
  async mounted() {
    // 컴포넌트가 처음 화면에 보이게 될 때, 자동으로 호출되는 메소드
    this.students = await loadStudents();
  },
  methods: {
    goEdit(id) {
      this.$router.push("/edit/" + id);
    },
     goCreate() {
      this.$router.push("/create/");
    },
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid gray;
}
table {
  border-collapse: collapse;
  margin: 20px 0;
  width: 100%;
}
tr:nth-child(1) {
  background-color: #eee;
  text-align: center;
}
td {
  border: 1px solid gray;
  padding: 6px;
}
td:nth-child(1) {
  text-align: center;
  width: 30px;
}
tr:hover { background-color: #ffd; cursor: pointer }
</style>