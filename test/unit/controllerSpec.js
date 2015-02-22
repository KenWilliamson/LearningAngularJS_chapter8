/* jasmine specs for controllers */
describe('AngularJS Blog Application', function () {

    beforeEach(module('blogApp'));
    //beforeEach(module('angularBlogServices'));

    describe('BlogCtrl', function () {
        var scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {


            scope = $rootScope.$new();
            ctrl = $controller('BlogCtrl', {$scope: scope});
        }));


        it('should create show blog entry count', function () {
            console.log("blogList:" + scope.blogList);
            expect(scope.blogList.length).toEqual(0);
            //expect(scope.blogList).toBeUndefined();
        });
    });


    describe('BlogViewCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $routeParams, $rootScope, $controller) {
            $httpBackend =  _$httpBackend_;
            $httpBackend.expectGET('blogPost').respond({_id: '1'});

            $routeParams.id = '1';

            scope = $rootScope.$new();
            
            ctrl = $controller('BlogViewCtrl', {$scope: scope});
        }));

        it('should show blog entry id', function () {            
            //expect(scope.blogEntry._id).toEqual(1);
            //expect(scope.blogList).toBeUndefined();
            expect(scope.blg).toEqual(1);
        });

    });


});
