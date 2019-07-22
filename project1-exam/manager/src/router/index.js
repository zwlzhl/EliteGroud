import addText from '../pages/Home/questionmanagement/addText/index'
import classifyication from '../pages/Home/questionmanagement/classification/index'
import seeText from '../pages/Home/questionmanagement/seeText/index'
import adduser from '../pages/Home/usermanagement/adduser/index'
import userDispyal from '../pages/Home/usermanagement/userdisplay/index'
import addExam from '../pages/Home/examinationmanagement/addexam/index'
import ExaminationPapers from '../pages/Home/examinationmanagement/examinationPapers/index'
import classs from '../pages/Home/classmanagement/Class/index'
import classRoom from '../pages/Home/classmanagement/classroom/index'
import classStudent from '../pages/Home/classmanagement/student/index'
import pendingClass from '../pages/Home/markingmanagement/pendingclass/index'
import classMate from '../pages/Home/markingmanagement/classmate/index'
import marking from '../pages/Home/markingmanagement/marking/index'
import examDetail from '../pages/Home/examinationmanagement/examdetail/index'
import text from '../pages/Home/questionmanagement/text/index'
import editPage from '../pages/Home/questionmanagement/editPage/index' 
import userUpload from '../pages/Home/userUpload/index'
import  createPage from '../pages/Home/examinationmanagement/createPage/index'
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