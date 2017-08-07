const assert = require('assert');
const _ = require('lodash');
import Vue from 'vue';
import EaselCanvas from '../resources/assets/js/components/EaselCanvas.vue';

describe('EaselCanvas', function () {
    describe('#instantiate', function () {
        var vm = new Vue({
            template: '<easel-canvas ref="easelCanvas"><span id="im-in-a-slot"></span></easel-canvas>',
            components: {
                'easel-canvas': EaselCanvas,
            },
        }).$mount();

        it('should have a canvas object', function () {
            assert(vm.$el.getElementsByTagName('canvas').length === 1);
        });

        it('should have a canvas object referenced as `easel`', function () {
            assert(vm.$refs.easelCanvas.$refs.easel !== null);
        });

        it('should have the slot stuff we put in', function () {
            assert(vm.$refs.easelCanvas.$el.getElementById('im-in-a-slot') !== null);
        });
    });
});
