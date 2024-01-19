<template>
  <div class="help-document">
    <p>AI Resume Generator Help</p>
    <section>
      <ul>
        <li>
          Create New Base Resume: Starts the process to create a new main
          resume. This is the resume that all of your generated resumes are
          based on.
        </li>
        <li>
          Edit User Details: Allows you to edit your personal and contact
          information for your main resume.
        </li>
        <li>
          Edit Main Resume Details: Modify the content of your main resume, such
          as work experience and education.
        </li>
        <li>
          Download Main Resume: Download the finished main resume to your
          device.
        </li>
        <li>
          Edit Generation Parameters: Adjust the parameters that influence how
          your resume is generated.
        </li>
        <li>
          Apply for Job: This will allow you to create a new resume and cover
          letter based off of a job description.
        </li>
        <li>
          Generate New Resume: Generate a new resume variant based on a pasted
          job description.
        </li>
        <li>
          Generate New Cover Letter: Create a cover letter tailored to a
          specific job description.
        </li>
        <li>
          View All Created Jobs: Review all job profiles you have created.
        </li>
        <li>
          User Settings: Change your password, delete your data, or delete your
          account.
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: "HelpDocument",
};
</script>
<style lang="scss" scoped>
li {
  margin-bottom: 1em;
  list-style-type: none;
}
li::before {
  content: "-";
  margin-left: -1em;
}
</style>
