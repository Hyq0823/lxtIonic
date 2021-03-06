angular.module('app').controller('formController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        startDate:'2010-01-01',
        endDate:'2015-12-12',
        startTime:'14:00',
        endTime:'16:43',
        startDatetime:'2010-01-01 14:00',
        endDatetime:'2015-12-12 16:43',

        selectData:[{code:'1',value:'java'},{code:'2',value:'C++'},{code:'3',value:'Android'},{code:'4',value:'iOS'},{code:'5',value:'PHP'},{code:'6',value:'.NET'}],
        selector:'2',
        address:'020202',
        addressData:[{
            value:'01',
            text:'上海',
            children:[{
                value:'0101',
                text:'上海',
                children:[{
                    value:'010101',
                    text:'浦东'
                },{
                    value:'010102',
                    text:'徐汇'
                }]
            }]
        },{
            value:'02',
            text:'湖南',
            children:[{
                value:'0201',
                text:'长沙',
                children:[{
                    value:'020101',
                    text:'雨花'
                },{
                    value:'020102',
                    text:'雨花2'
                }]
            },{
                value:'0202',
                text:'株洲',
                children:[{
                    value:'020201',
                    text:'荷塘'
                },{
                    value:'020202',
                    text:'天元'
                }]
            }]
        }],
        gender:true,
        score:3.5
    };
    $scope.vc = {
        addToast:function(){
            $scope.vo.toastText = [{text:'toast text'+Math.random()}];
        },
        submit:function(form){
            console.log(form);
            var validator = {
                '字段1':{
                    required:'不能为空！',
                    pattern:'只能是数字！'
                },
                '字段2':{
                    minlength:'最小长度不能少于4！',
                    maxlength:'最大长度不能超过8！'
                },
                '字段3':{
                    min:'最小1！',
                    max:'最大10！'
                }
            }

            var error = [];

            for(var name in validator){
                var field = validator[name];
                for(var type in field){
                    if(form[name].$error[type]){
                        error.push({text:name+field[type],type:'error'});
                    }
                }
            }

            $scope.vo.toastText = error;
        }
    };

    $scope.ready = (function(){
        
    })();
}]);