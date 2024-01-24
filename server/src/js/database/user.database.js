const executeQuery = require('../services/database_query.service');

const $SQLUser = {
  async setUserInfo (id, data) {
    try {
      const query = 'INSERT INTO user_details (first_name, last_name, address, city, state, zip, phone_number, email, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const result = await executeQuery(query, [data.firstName, data.lastName, data.address, data.city, data.state, data.postalCode, data.phoneNumber, data.emailAddress, id]);
      return result;
    } catch (error) {
      console.log("setUserInfo: error = ", error);
      throw error;
    }
  },
  async setAdditionalInfo (id, data) {
    try {
      const query = 'UPDATE user_details SET job_title = ?, title_search = ?, career_industry = ?, career_years = ?, previous_jobs = ?, brief_summary = ? WHERE user_id = ?';
      const result = await executeQuery(query, [data.jobTitle, data.lookingFor, data.industry, data.careerYears, data.howManyJobs, data.briefSummary, id]);
      return result;
      } catch (error) {
      console.log("setAdditionalInfo: error = ", error);
      throw error;
    }
  },
  async setJobHistory (id, data) {
    try {
      const query = 'INSERT INTO jobs (user_id, job_desc) VALUES (?, ?)';
      const result = await executeQuery(query, [id, data]);
      return result;
    } catch (error) {
      console.log("setJobHistory: error = ", error);
      throw error;
    }
  },
  async setLinks (id, data) {
    try {
      const query = 'UPDATE jobs SET links = ? WHERE user_id = ?';
      const result = await executeQuery(query, [id, data]);
      return result;
    } catch (error) {
      console.log("setLinks: error = ", error);
      throw error;
    }
  },
};

module.exports = $SQLUser;