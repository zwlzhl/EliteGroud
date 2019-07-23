import dynamic from 'dva/dynamic';

const addText = dynamic({
    component: () => import('../pages/Home/questionmanagement/addText'),
  });
  const classifyication = dynamic({
    component: () => import('../pages/Home/questionmanagement/classification'),
  });
  const seeText = dynamic({
    component: () => import('../pages/Home/questionmanagement/seeText'),
  });
  const adduser = dynamic({
    component: () => import('../pages/Home/usermanagement/adduser'),
  });
  const userDispyal = dynamic({
    component: () => import('../pages/Home/usermanagement/userdisplay'),
  });
  const addExam = dynamic({
    component: () => import('../pages/Home/examinationmanagement/addexam'),
  });
  const ExaminationPapers = dynamic({
    component: () => import('../pages/Home/examinationmanagement/examinationPapers'),
  });
  const classs = dynamic({
    component: () => import('../pages/Home/classmanagement/Class/index'),
  });
  const classRoom = dynamic({
    component: () => import('../pages/Home/classmanagement/classroom/index'),
  });
  const classStudent = dynamic({
    component: () => import('../pages/Home/classmanagement/student'),
  });
  const pendingClass = dynamic({
    component: () => import('../pages/Home/markingmanagement/pendingclass'),
  });
  const classMate = dynamic({
    component: () => import('../pages/Home/markingmanagement/classmate'),
  });
  const marking = dynamic({
    component: () => import('../pages/Home/markingmanagement/marking'),
  });
  const examDetail = dynamic({
    component: () => import('../pages/Home/examinationmanagement/examdetail'),
  });


  const text = dynamic({
    component: () => import('../pages/Home/questionmanagement/text'),
  });
  const editPage = dynamic({
    component: () => import('../pages/Home/questionmanagement/editPage'),
  });
  const createPage = dynamic({
    component: () => import('../pages/Home/examinationmanagement/createPage'),
  });
export default {
    routes: [
        {
            name: 'router.questions',
            path: '',
            children: [
                {
                    name: 'router.questions.add',
                    path: '/home/addText',
                    view_id: 'main-addQuestions',
                    component: addText
                }, 
                {
                    name: 'router.questions.view',
                    path: '/home/classification',
                    view_id: 'main-questionsType',
                    component: classifyication
                }, 
                {
                    name: 'router.questions.type',
                    path: '/home/seeText',
                    view_id: 'main-watchQuestions',
                    component: seeText
                },
                {
                    name: 'type.detail',
                    path: '/home/pending',
                    view_id: 'main-questionsDetail',
                    component: text
                },
                {
                    name: 'type.edit',
                    path: '/home/editPage',
                    view_id: 'main-editQuestions',
                    component: editPage
                }
            ]
        },     
        {
            name: 'usermanagement',
            path: '',
            children: [
                {
                    name: 'usermanagement.adduser',
                    path: '/home/adduser',
                    view_id: 'main-addUser',
                    component: adduser
                }, 
                {
                    name: 'usermanagement.showuser',
                    path: '/home/userdisplay',
                    view_id: 'main-showUser',
                    component: userDispyal
                }
            ]
        },
        {
            name: 'exammangement',
            path: '',
            children: [
                {
                    name: 'exammangement.addexam',
                    path: '/home/addExamination',
                    view_id: 'main-addExam',
                    component: addExam
                }, 
                {
                    name: 'exammangement.examlist',
                    path: '/home/testpaper',
                    view_id: 'main-examList',
                    component: ExaminationPapers
                },
                {
                    name: 'examlist.detail',
                    path: '/home/examdetail',
                    view_id: 'main-examDetail',
                    component: examDetail
                },
                {
                    name: 'examlist.examedit',
                    path: '/home/createpage',
                    view_id: 'main-examEdit',
                    component: createPage
                }
            ]
        },
        {
            name: 'classmangement',
            path: '',
            children: [
                {
                    name: 'classmangement.class',
                    path: '/home/class',
                    view_id: 'main-grade',
                    component: classs
                }, 
                {
                    name: 'classmangement.classroom',
                    path: '/home/classroom',
                    view_id: 'main-room',
                    component: classRoom
                },
                {
                    name: 'classmangement.student',
                    path: '/home/student',
                    view_id: 'main-student',
                    component: classStudent
                }
            ]
        },
        {
            name: 'markmangement',
            path: '',
            children: [
                {
                    name: 'markmangement.pendding',
                    path: '/home/pendingClass',
                    view_id: 'main-examPaperClassList',
                    component: pendingClass
                },
                {
                    name: 'pendding.pendding',
                    path: '/home/classmate',
                    view_id: 'main-examPaperClassmate',
                    component: classMate
                },
                {
                    name: 'pendding.marking',
                    path: '/home/marking',
                    view_id: 'main-examinationPapers',
                    component: marking
                }
            ]
        },
        // {
        //     name: "userInfo.more",
        //     path: '/home/userUpload',
        //     view_id: "main-showUser",
        //     component: userUpload
        // }
    ]
}