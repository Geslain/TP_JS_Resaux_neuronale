/**
 * Created by Gess on 07/01/2016.
 */

(function (window, $) {
    var Individu = function () {
        this.NB_NOTES = 16;
        this.T_MUT = 1/ this.NB_NOTES;
        this.notes;
    }

    Individu.prototype.mutation = function () {
        var rnd;
        for (var i = 0; i < this.NB_NOTES; i++) {
            rnd = Math.random();
            if (rnd < this.T_MUT) {
                this.notes[i].changerNote();
            }
        }
    }

    window.Individu = Individu;

})(window, jQuery);