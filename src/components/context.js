import React, { useState, useEffect } from "react";
// import {
//   AIRTABLE_APIKEY,
//   AIRTABLE_BASE,
// } from "./config";
// import { data } from './components/data';
// import { Preloader, Preloader0 } from './uikit/Uikit';



// const Airtable = require("airtable");



// Airtable.configure({
//   endpointUrl: "https://api.airtable.com",
//   apiKey: AIRTABLE_APIKEY,
// });
// const base = Airtable.base(AIRTABLE_BASE);




const Context = React.createContext();

function Provider({ children }) {


  // const [items, setItems] = useState([]);
  // const [items, setItems] = useState(itemsCached);


  const [categories, setCategories] = useState([]);


  // const [activeProjects, setActiveProjects] = useState([...data.projects.map(onePr => onePr['id'])]);
  // const [activeProjects, setActiveProjects] = useState(['gs', 'rc', 'ustoy']);
  const [activeUsers, setActiveUsers] = useState(['danny', 'misha', 'joe']);
  const [activeProjects, setActiveProjects] = useState(['gs']);
  const [activeDate, setActiveDate] = useState('10/27/2021');


  const getLocal = () => {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : {
      email: ''
    };
  };



  const [user, setUser] = useState(getLocal());



  const [ready, setReady] = useState(false);





  const saveLocal = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const setUserEmail = (email) => {
    console.log('email = ', email)
    let userNew = JSON.parse(JSON.stringify(user));
    userNew = {
      ...user,
      email: email
    }
    setUser(userNew)
    saveLocal(userNew)
  };



  const [users, setUsers] = useState([])
  const [projects, setProjects] = useState([])
  const [metadata, setMetadata] = useState([])
  const [videos, setVideos] = useState([])
  const [metaDataTypes, setMetaDataTypes] = useState([])




  // useEffect(() => {
  //   if (!users.length) {
  //     base("Users")
  //       .select({
  //         maxRecords: 100,
  //         // sort: [{ field: "importance", direction: "desc" }],
  //       })
  //       .eachPage(function page(partialRecords, fetchNextPage) {
  //         setUsers([
  //             ...users,
  //             ...partialRecords
  //               .filter(record => record.get("active"))
  //               .map((record) => ({
  //                 id: record['id'],
  //                 uniq: record.get('uniq'),
  //                 name: record.get('name'),
  //                 img: record.get('img') ? record.get('img')[0] : {},
  //                 title: record.get('title'),
  //                 metadata: record.get('metadata') ? record.get('metadata') : [],
  //                 videos: record.get('videos') ? record.get('videos') : [],
  //               })),
  //           ]);
  //           // partialRecords.forEach(function(record) {
  //           //   console.log('Retrieved', partialRecords.get('img_url'));
  //           // });
  //           fetchNextPage();
  //         },
  //         function done(err) {
  //           if (err) {
  //             console.error(err);
  //             return;
  //           }
  //         }
  //       );
  //   }
  // }, [users]);


  // useEffect(() => {
  //   if (!projects.length) {
  //     base("Projects")
  //       .select({
  //         maxRecords: 100,
  //         // sort: [{ field: "importance", direction: "desc" }],
  //       })
  //       .eachPage(function page(partialRecords, fetchNextPage) {
  //         setProjects([
  //             ...projects,
  //             ...partialRecords
  //               .filter(record => record.get("active"))
  //               .map((record) => ({
  //                 id: record['id'],
  //                 uniq: record.get('uniq'),
  //                 title: record.get('title'),
  //                 img: record.get('img') ? record.get('img')[0] : {},
  //                 color: record.get('color'),
  //                 videos: record.get('videos') ? record.get('videos') : [],
  //                 user: record.get('user') ? record.get('user')[0] : {},
  //               })),
  //           ]);
  //           // partialRecords.forEach(function(record) {
  //           //   console.log('Retrieved', partialRecords.get('img_url'));
  //           // });
  //           fetchNextPage();
  //         },
  //         function done(err) {
  //           if (err) {
  //             console.error(err);
  //             return;
  //           }
  //         }
  //       );
  //   }
  // }, [projects]);

  // useEffect(() => {
  //   if (!videos.length) {
  //     base("Videos")
  //       .select({
  //         maxRecords: 100,
  //         // sort: [{ field: "importance", direction: "desc" }],
  //       })
  //       .eachPage(function page(partialRecords, fetchNextPage) {
  //         setVideos([
  //             ...videos,
  //             ...partialRecords
  //               .filter(record => record.get("active"))
  //               .map((record) => ({
  //                 id: record['id'],
  //                 uniq: record.get('uniq'),
  //                 url: record.get('url'),
  //                 img: record.get('img') ? record.get('img')[0] : {},
  //                 date: record.get('date'),
  //                 length: record.get('length'),
  //                 title: record.get('title'),
  //                 user: record.get('user') ? record.get('user')[0] : {},
  //                 userImg: record.get('userImg') ? record.get('userImg')[0] : [],
  //                 metadata: record.get('metadata') ? record.get('metadata') : [],
  //               })),
  //           ]);
  //           // partialRecords.forEach(function(record) {
  //           //   console.log('Retrieved', partialRecords.get('img_url'));
  //           // });
  //           fetchNextPage();
  //         },
  //         function done(err) {
  //           if (err) {
  //             console.error(err);
  //             return;
  //           }
  //         }
  //       );
  //   }
  // }, [videos]);


  // useEffect(() => {
  //   if (!metadata.length) {
  //     base("Metadata")
  //       .select({
  //         maxRecords: 100,
  //         view: "DONTCHANGE",
  //         // sort: [{ field: "importance", direction: "desc" }],
  //       })
  //       .eachPage(function page(partialRecords, fetchNextPage) {
  //         setMetadata([
  //             ...metadata,
  //             ...partialRecords
  //               .filter(record => record.get("active"))
  //               .map((record) => ({
  //                 id: record['id'],
  //                 uniq: record.get('uniq'),
  //                 author: record.get('author'),
  //                 metaTime: record.get('metaTime'),
  //                 shownByDefault: record.get('shownByDefault'),

  //                 type: record.get('type') ? record.get('type')[0] : {},
  //                 typeRef: record.get('typeRef') ? record.get('typeRef')[0] : {},
  //                 typeIcon: record.get('typeIcon') ? record.get('typeIcon')[0] : {},
  //                 typeColor: record.get('typeColor') ? record.get('typeColor')[0] : {},
  //                 typeTitle: record.get('typeTitle') ? record.get('typeTitle')[0] : {},


  //                 authorImg: record.get('authorImg') ? record.get('authorImg')[0] : {},
  //                 authorName: record.get('authorName'),
  //                 commentText: record.get('commentText'),
  //                 commentParentId: record.get('commentParentId'),
  //                 commentParentText: record.get('commentParentText'),
  //                 videoId: record.get('videoId') ? record.get('videoId')[0] : '',
  //                 videoThumb: record.get('videoThumb') ? record.get('videoThumb')[0] : {},
  //               })),
  //           ]);
  //           // partialRecords.forEach(function(record) {
  //           //   console.log('Retrieved', partialRecords.get('img_url'));
  //           // });
  //           fetchNextPage();
  //         },
  //         function done(err) {
  //           if (err) {
  //             console.error(err);
  //             return;
  //           }
  //         }
  //       );
  //   }
  // }, [metadata]);

  // useEffect(() => {
  //   if (!metaDataTypes.length) {
  //     base("MetadataTypes")
  //       .select({
  //         maxRecords: 100,
  //         view: 'Grid view',
  //         // view: "DONTCHANGE",
  //         sort: [{ field: "importance", direction: "desc" }],
  //       })
  //       .eachPage(function page(partialRecords, fetchNextPage) {
  //         setMetaDataTypes([
  //             ...metaDataTypes,
  //             ...partialRecords
  //             .filter(record => record.get("active"))
  //             .map((record) => ({
  //               id: record['id'],
  //               type: record.get('type'),
  //               title: record.get('title'),
  //               icon: record.get('icon'),
  //               color: record.get('color'),
  //               emoji: record.get('emoji'),
  //             })),
  //           ]);
  //           fetchNextPage();
  //         },
  //         function done(err) {
  //           if (err) {
  //             console.error(err);
  //             return;
  //           }
  //         }
  //       );
  //   }
  // }, [metaDataTypes]);



  // useEffect(() => {
  //   if (
  //       users.length &&
  //       videos.length &&
  //       metadata.length &&
  //       projects.length &&
  //       metaDataTypes.length
  //     ) {
  //     setReady(true)
  //   }
  // }, [
  //   users,
  //   videos,
  //   metadata,
  //   projects,
  //   metaDataTypes,
  // ])



  // const saveToLocal = (alert) => {
  //   let data = JSON.stringify({
  //     stacks: stacks,
  //   });
  //   // .replace('value:false,', 'defaultValue:false,')
  //   // .replace('value:true,', 'defaultValue:true,');
  //   localStorage.setItem("gs", data);
  //   if (alert)
  //     addToast("Saved Successfully", {
  //       appearance: "success",
  //       autoDismiss: true,
  //       autoDismissTimeout: 500,
  //     });
  // };

  // const getFromLocal = () => {
  //   let data = localStorage.getItem("gs");
  //   return Boolean(data) ? JSON.parse(data) : null;
  // };




  // const getCategoryById = (id, field) => {
  //   let a = categories.filter((item) => item["id"] === id)[0];
  //   if (a && field) {a = a[field] ? a[field] : null}
  //   return a;
  // };


  // const getUserDataById = (userId) => {
  //   let user = data['users'].filter(oneUser => oneUser['id'] === userId)
  //   let blankUser = {
  //     id: '-',
  //     name: '-',
  //     title: '-',
  //     ava: '',
  //     log: []
  //   }
  //   return user.length ? user[0] : blankUser;
  // };


  // const getUsersForProjects = (date, activeProjects = [],) => {
  //   // activeUsers
  //   let users = []
  //   console.log('data[users] = ', data['users']);
  //   data['users'].forEach(oneUser => {
  //     if (!activeUsers.includes (oneUser['id'])) return
  //     // let checkDate = date === oneUser['log']['date'];
  //     let userLogForDay = oneUser['log'].filter(oneLogEntry => oneLogEntry['date'] === date && activeProjects.includes(oneLogEntry['project']))
  //     let userFiltered = JSON.parse(JSON.stringify(oneUser));
  //     userFiltered['log'] = userLogForDay;
  //     if (userLogForDay.length) users.push(userFiltered)
  //   })
  //   return users
  // }

  const setUserData = (newUser) => setUser(newUser)


  const setNewDate = (newDate) => setActiveDate(newDate)

  return (
    <Context.Provider
      value={{
        ready,
        user: {
          ...user
        },
        state: {

        },
        data: {

        },
        handles: {
          setUserData
        }

      }}
    >

      {/* {!ready && <Preloader0><Preloader width={120} height={120}/></Preloader0>} */}
      {children}
    </Context.Provider>
  );
}

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
