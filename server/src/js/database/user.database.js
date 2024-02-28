const executeQuery = require('../services/database_query.service');

const $SQLUser = {
  async setUserInfo (id, data) {
    console.log("setUserInfo: data = ", data);
    try {
      const query = 'INSERT INTO user_details (first_name, last_name, address, city, state, zip, phone_number, email, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const result = await executeQuery(query, [data.first_name, data.last_name, data.address, data.city, data.state, data.zip, data.phone_number, data.email, id]);
      return result;
    } catch (error) {
      console.log("setUserInfo: error = ", error);
      throw error;
    }
  },
  async setAdditionalInfo (id, data) {
    try {
      const query = 'UPDATE user_details SET job_title = ?, title_search = ?, career_industry = ?, career_years = ?, previous_jobs = ? WHERE user_id = ?';
      const result = await executeQuery(query, [data.jobTitle, data.lookingFor, data.industry, data.careerYears, data.howManyJobs, id]);
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
      const result = await executeQuery(query, [data, id]);
      return result;
    } catch (error) {
      console.log("setLinks: error = ", error);
      throw error;
    }
  },
  async setSkills (id, data) {
    try {
      const query = 'UPDATE jobs SET skills = ? WHERE user_id = ?';
      const result = await executeQuery(query, [data, id]);
      return result;
    } catch (error) {
      console.log("setSkills: error = ", error);
      throw error;
    }
  },
  async setEducation (id, data) {
    try {
      const query = 'UPDATE jobs SET education = ? WHERE user_id = ?';
      const result = await executeQuery(query, [data, id]);
      return result;
    } catch (error) {
      console.log("setEducation: error = ", error);
      throw error;
    }
  },
  async setPersonalInfo (id, data) {
    try {
      const query = 'UPDATE users SET personal_info = ? WHERE id = ?';
      const result = await executeQuery(query, [true, id]);
      return result;
    } catch (error) {
      console.log("setPersonalInfo: error = ", error);
      throw error;
    }
  },
  async setAdditionalInfo (id, data) {
    try {
      const query = 'UPDATE users SET additional_info = ? WHERE id = ?';
      const result = await executeQuery(true, [data, id]);
      return result;
    } catch (error) {
      console.log("setAdditionalInfo: error = ", error);
      throw error;
    }
  },
  async setSummary (id, data) {
    try {
      const query = 'UPDATE users SET summary = ? WHERE id = ?';
      const result = await executeQuery(query, [data, id]);
      return result;
    } catch (error) {
      console.log("setSummary: error = ", error);
      throw error;
    }
  },
  async resumeExists (id) {
    try {
      const query = 'SELECT id FROM jobs WHERE user_id = ?';
      const result = await executeQuery(query, [id]);
      return result;
    } catch (error) {
      console.log("resumeExists: error = ", error);
      throw error;
    }
  },
  async getLoginData (id) {
    try {
      const query = 'SELECT email, personal_info, additional_info FROM users WHERE id = ?';
      const result = await executeQuery(query, [id]);
      return result;
    } catch (error) {
      console.log("getUserData: error = ", error);
      throw error;
    }
  },
  async getUserInfo (id) {
    try {
      const query = 'SELECT * FROM user_details WHERE user_id = ?';
      const result = await executeQuery(query, [id]);
      return result;
    } catch (error) {
      console.log("getUserInfo: error = ", error);
      throw error;
    }
  },
  async getUserResume (id) {
    try {
      const query = 'SELECT * FROM jobs WHERE user_id = ?';
      const result = await executeQuery(query, [id]);
      return result;
    } catch (error) {
      console.log("getUserResume: error = ", error);
      throw error;
    }
  }
};

module.exports = $SQLUser;