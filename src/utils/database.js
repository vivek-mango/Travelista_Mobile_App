import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'PostsDatabase',
    location: 'default',
  },
  () => {},
  error => console.log('DB Error:', error),
);

export const initDatabase = () => {
  db.transaction(tx => {
    // Create posts table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        images TEXT,
        video TEXT
      )`,
    );

    // Create plan_posts table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS plan_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        start_date TEXT,
        end_date TEXT
      )`,
    );

    // Create day_activities table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS day_activities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day_id INTEGER,
        title TEXT,
        description TEXT,
        images TEXT,
        video TEXT,
        location TEXT
      )`,
    );
  });
};

// Posts table functions
export const savePost = post => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO posts (title, description, images, video) VALUES (?, ?, ?, ?)',
        [
          post.title,
          post.description,
          JSON.stringify(post.images),
          JSON.stringify(post.video),
        ],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
};

export const getLatestPost = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM posts ORDER BY id DESC LIMIT 1',
        [],
        (_, {rows}) => resolve(rows.item(0)),
        (_, error) => reject(error),
      );
    });
  });
};

// Plan Posts table functions
export const savePlanPost = planPost => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO plan_posts (title, description, start_date, end_date) VALUES (?, ?, ?, ?)',
        [
          planPost.title,
          planPost.description,
          planPost.startDate,
          planPost.endDate,
        ],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
};

export const getLatestPlanPost = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM plan_posts ORDER BY id DESC LIMIT 1',
        [],
        (_, {rows}) => resolve(rows.item(0)),
        (_, error) => reject(error),
      );
    });
  });
};

export const getAllPlanPosts = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM plan_posts ORDER BY id DESC',
        [],
        (_, {rows}) => {
          const posts = [];
          for (let i = 0; i < rows.length; i++) {
            posts.push(rows.item(i));
          }
          resolve(posts);
        },
        (_, error) => reject(error),
      );
    });
  });
};

// Add new table for activities

export const saveActivityForDay = (dayId, activity) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO day_activities (day_id, title, description, images, video, location) VALUES (?, ?, ?, ?, ?, ?)',
        [
          dayId,
          activity.title,
          activity.description,
          JSON.stringify(activity.images),
          JSON.stringify(activity.video),
          activity.location || 'Ankara, Turkey',
        ],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
};

export const getActivitiesForDay = (dayId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM day_activities WHERE day_id = ?',
        [dayId],
        (_, {rows}) => {
          const activities = [];
          for (let i = 0; i < rows.length; i++) {
            activities.push(rows.item(i));
          }
          resolve(activities);
        },
        (_, error) => reject(error)
      );
    });
  });
};
