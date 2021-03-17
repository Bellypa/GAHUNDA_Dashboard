function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/barber-edit/barber-edit.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/barber-edit/barber-edit.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBarberEditBarberEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h4 class=\"card-title\">Create Barber</h4>\n              <!-- <p class=\"card-category\">Complete your profile</p> -->\n            </div>\n            <div class=\"card-body\">\n              <form #userform=\"ngForm\" (ngSubmit)=\"onSubmit(userform)\" autocomplete=\"off\" novalidate>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Name</label>\n                      <input type=\"text\" class=\"form-control\" name=\"names\" [(ngModel)]=\"partner.names\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Phone</label>\n                      <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"partner.phone\">\n                    </div>\n                  </div>\n                  \n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"partner.email\">\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Momo Code</label>\n                      <input type=\"text\" class=\"form-control\"  name=\"momoCode\" [(ngModel)]=\"partner.momoCode\">\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\">\n                    </div>\n                  </div> -->\n                </div>\n                <!-- <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Fist Name</label>\n                        <select type=\"text\" class=\"form-control\" name=\"name\">\n                            <option>Test 1</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\">\n                      </div>\n                    </div>\n                  </div> -->\n                <!-- <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Adress</label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\">\n                    </div>\n                  </div>\n                </div> -->\n                <!-- <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">City</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Country</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Postal Code</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div> -->\n                <!-- <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>Location</label>\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\"></label>\n                        <textarea class=\"form-control\" rows=\"3\" name=\"location\" [(ngModel)]=\"partner.location\"></textarea>\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n                <button type=\"button\" (click)=\"closePartner()\" class=\"btn btn-primary pull-right\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-primary pull-right\">Submit</button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-profile\">\n            <div class=\"card-avatar\">\n              <a href=\"javascript:;\">\n                <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\n              </a>\n            </div>\n            <!-- <div class=\"card-body\">\n              <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n              <h4 class=\"card-title\">Alec Thompson</h4>\n              <p class=\"card-description\">\n                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n              </p>\n              <a href=\"javascript:;\" class=\"btn btn-primary btn-round\">Follow</a>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/barbers/barbers.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/barbers/barbers.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBarbersBarbersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"table-header\">\n                <div class=\"search_area\">\n                    <form class=\"navbar-form\">\n                        <div class=\"input-group no-border\">\n                            <input type=\"text\" name=\"searchBarber\" class=\"form-control\" [(ngModel)]=\"searchBarber\"\n                                placeholder=\"Search...\">\n                            <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                                <i class=\"material-icons\">search</i>\n                                <div class=\"ripple-container\"></div>\n                            </button>\n                        </div>\n\n                    </form>\n                </div>\n                <div class=\"placement\">\n                    <button class=\"btn btn-primary\" (click)=\"newBarber()\">New</button>\n                </div>\n            </div>\n            <!-- <div class=\"table-header\">\n                <div class=\"search_area\">\n\n                </div>\n                <div class=\"col-md-4 placement\">\n                    <button class=\"btn btn-primary btn-block \" (click)=\"newPartnerService()\">New</button>\n                </div>\n            </div> -->\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title \">Barbers</h4>\n                        <!-- <p class=\"card-category\"> Here is a subtitle for this table</p> -->\n\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>Name</th>\n                                    <th>Phone</th>\n                                    <th>Email</th>\n\n                                    <th>Action </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let barber of barbers |genericfilter:searchBarber\">\n                                        <td>{{barber.names}}</td>\n                                        <td>{{barber.phone}}</td>\n                                        <td>{{barber.email}}</td>\n                                        <td class=\"action paytablebtns maxwidth_action\">\n                                            <div class=\"tableaction_btn\">\n                                                <a class=\"action_button\">More..</a>\n                                                <ul class=\"actionlist_cont\">\n                                                    <li>\n                                                        <!-- <a class=\"actionitem\" (click)=\"editBarber(barber)\">Edit</a> -->\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </td>\n                                        <!-- <td class=\"text-primary\"> $36,738 </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-warning card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">content_copy</i>\n                        </div>\n                        <p class=\"card-category\">Used Space</p>\n                        <h3 class=\"card-title\">49/50\n                            <small>GB</small>\n                        </h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons text-danger\">warning</i>\n                            <a href=\"javascript:;\">Get More Space...</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-success card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">store</i>\n                        </div>\n                        <p class=\"card-category\">Revenue</p>\n                        <h3 class=\"card-title\">$34,245</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-danger card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">info_outline</i>\n                        </div>\n                        <p class=\"card-category\">Fixed Issues</p>\n                        <h3 class=\"card-title\">75</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">local_offer</i> Tracked from Github\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </div>\n                        <p class=\"card-category\">Followers</p>\n                        <h3 class=\"card-title\">+245</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">update</i> Just Updated\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-success\">\n                        <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Daily Sales</h4>\n                        <p class=\"card-category\">\n                            <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today\n                            sales.\n                        </p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-warning\">\n                        <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Email Subscriptions</h4>\n                        <p class=\"card-category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-danger\">\n                        <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                    </div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Completed Tasks</h4>\n                        <p class=\"card-category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-tabs card-header-primary\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <span class=\"nav-tabs-title\">Tasks:</span>\n                                <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">bug_report</i> Bugs\n                                            <div class=\"ripple-container\"></div>\n                                        </a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">code</i> Website\n                                            <div class=\"ripple-container\"></div>\n                                        </a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">cloud</i> Server\n                                            <div class=\"ripple-container\"></div>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\"\n                                                            checked>\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Flooded: One year later, assessing what was lost and what was found when\n                                                a ravaging rain swept through metro Detroit\n                                            </td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\"\n                                                            checked>\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"messages\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\"\n                                                            checked>\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Flooded: One year later, assessing what was lost and what was found when\n                                                a ravaging rain swept through metro Detroit\n                                            </td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"settings\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\"\n                                                            checked>\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Flooded: One year later, assessing what was lost and what was found when\n                                                a ravaging rain swept through metro Detroit\n                                            </td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\"\n                                                            checked>\n                                                        <span class=\"form-check-sign\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\"\n                                                    class=\"btn btn-primary btn-link btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\"\n                                                    class=\"btn btn-danger btn-link btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Employees Stats</h4>\n                        <p class=\"card-category\">New employees on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>ID</th>\n                                <th>Name</th>\n                                <th>Salary</th>\n                                <th>Country</th>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Dakota Rice</td>\n                                    <td>$36,738</td>\n                                    <td>Niger</td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Minerva Hooper</td>\n                                    <td>$23,789</td>\n                                    <td>Curaçao</td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Sage Rodriguez</td>\n                                    <td>$56,142</td>\n                                    <td>Netherlands</td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Philip Chaney</td>\n                                    <td>$38,735</td>\n                                    <td>Korea, South</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partner-edit/partner-edit.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/partner-edit/partner-edit.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPartnerEditPartnerEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h4 class=\"card-title\">Create Partner</h4>\n              <!-- <p class=\"card-category\">Complete your profile</p> -->\n            </div>\n            <div class=\"card-body\">\n              <form #userform=\"ngForm\" (ngSubmit)=\"onSubmit(userform)\" autocomplete=\"off\" novalidate>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Name</label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"partner.name\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Phone</label>\n                      <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"partner.phone\">\n                    </div>\n                  </div>\n                  \n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"partner.email\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Momo Code</label>\n                      <input type=\"text\" class=\"form-control\"  name=\"momoCode\" [(ngModel)]=\"partner.momoCode\">\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\">\n                    </div>\n                  </div> -->\n                </div>\n                <!-- <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Fist Name</label>\n                        <select type=\"text\" class=\"form-control\" name=\"name\">\n                            <option>Test 1</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\">\n                      </div>\n                    </div>\n                  </div> -->\n                <!-- <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Adress</label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\">\n                    </div>\n                  </div>\n                </div> -->\n                <!-- <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">City</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Country</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Postal Code</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div> -->\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>Location</label>\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\"></label>\n                        <textarea class=\"form-control\" rows=\"3\" name=\"location\" [(ngModel)]=\"partner.location\"></textarea>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <button type=\"button\" (click)=\"closePartner()\" class=\"btn btn-primary pull-right\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-primary pull-right\">Submit</button>\n                <div class=\"clearfix\"></div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-profile\">\n            <div class=\"card-avatar\">\n              <a href=\"javascript:;\">\n                <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\n              </a>\n            </div>\n            <!-- <div class=\"card-body\">\n              <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n              <h4 class=\"card-title\">Alec Thompson</h4>\n              <p class=\"card-description\">\n                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n              </p>\n              <a href=\"javascript:;\" class=\"btn btn-primary btn-round\">Follow</a>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPartnersPartnersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"mat-elevation-z8\" [hidden]=\"isNewUser\">\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" (click)=\"newEmployee()\">+ New Partner</button>\n    </div>\n    <table #table mat-table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"location\">\n            <th mat-header-cell *matHeaderCellDef> Location </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n        </ng-container>\n         <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef> Email </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n        </ng-container>\n\n         <ng-container matColumnDef=\"phone\">\n            <th mat-header-cell *matHeaderCellDef> Phone </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n        </ng-container>\n\n         <ng-container matColumnDef=\"momoCode\">\n            <th mat-header-cell *matHeaderCellDef> Momo Code </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.momoCode}} </td>\n        </ng-container>\n\n    \n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\">\n             \n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"openDialog(element)\">\n                        <mat-icon>add_shopping_cart</mat-icon>\n                        <span>Sold</span>\n                    </button>\n                </mat-menu>\n            </td>\n        </ng-container>\n\n        \n\n\n\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 50]\" showFirstLastButtons></mat-paginator>\n</div>\n\n\n\n<div *ngIf=\"isNewUser\">\n    <app-partner-edit (backToTitle)=\"backToProduct($event)\"></app-partner-edit>\n</div> -->\n\n\n\n<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"table-header\">\n                <div class=\"search_area\">\n                    <form class=\"navbar-form\">\n                        <div class=\"input-group no-border\">\n                            <input type=\"text\" value=\"\" class=\"form-control\" name=\"searchPartner\" [(ngModel)]=\"searchPartner\" placeholder=\"Search...\">\n                            <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                                <i class=\"material-icons\">search</i>\n                                <div class=\"ripple-container\"></div>\n                            </button>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"placement\">\n                    <button class=\"btn btn-primary\" (click)=\"newPartner()\">New</button>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-4 placement\">\n                <button class=\"btn btn-primary btn-block \" (click)=\"newPartner()\">New</button>\n            </div> -->\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title \">Partners</h4>\n                        <!-- <p class=\"card-category\"> Here is a subtitle for this table</p> -->\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>ID</th>\n                                    <th>Name</th>\n                                    <th>Location</th>\n                                    <th>Email</th>\n                                    <th>Phone</th>\n                                    <th>Momo Code</th>\n                                    <!-- <th>Created On</th> -->\n                                    <th>Action </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of partners |genericfilter:searchPartner\">\n                                        <td>{{user.id}}</td>\n                                        <td>{{user.name}}</td>\n                                        <td>{{user.location}}</td>\n                                        <td>{{user.email}}</td>\n                                        <td>{{user.phone}}</td>\n                                        <td>{{user.momoCode}}</td>\n                                        <!-- <td>{{user.createdOnDate | date}}</td> -->\n                                        <td class=\"action paytablebtns maxwidth_action\">\n                                            <div class=\"tableaction_btn\">\n                                                <a class=\"action_button\">More..</a>\n                                                <ul class=\"actionlist_cont\">\n                                                    <li>\n                                                        <a class=\"actionitem\" (click)=\"addService(user)\">Service</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </td>\n                                        <!-- <td class=\"text-primary\"> $36,738 </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reservations/reservations.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reservations/reservations.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReservationsReservationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"table-header\">\n                <div class=\"search_area\">\n                    <form class=\"navbar-form\">\n                        <div class=\"input-group no-border\">\n                            <input type=\"text\" name=\"searchReservation\" class=\"form-control\"\n                                [(ngModel)]=\"searchReservation\" placeholder=\"Search...\">\n                            <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                                <i class=\"material-icons\">search</i>\n                                <div class=\"ripple-container\"></div>\n                            </button>\n                        </div>\n\n                    </form>\n                </div>\n                <div class=\"placement\">\n                    <div class=\"col-md-8\">\n                        <div class=\"form-group\">\n                            <!-- <label class=\"bmd-label-floating\">Filter</label> -->\n                            <select type=\"text\" class=\"form-control\" name=\"name\" (change)=\"filterSessions($event.target.value)\">\n                                <option value=\"0\">None</option>\n                                <option value=\"true\">Served</option>\n                                <option value=\"false\">Not Served</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"table-header\">\n                <div class=\"search_area\">\n\n                </div>\n                <div class=\"col-md-4 placement\">\n                    <button class=\"btn btn-primary btn-block \" (click)=\"newPartnerService()\">New</button>\n                </div>\n            </div> -->\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title \">Reservation</h4>\n                        <!-- <p class=\"card-category\"> Here is a subtitle for this table</p> -->\n\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>ID</th>\n                                    <th>Client</th>\n                                    <th>Service</th>\n                                    <th>Partner</th>\n                                    <th>Reservation</th>\n                                    <th>Status</th>\n                                    <th>Action </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of viewReservations |genericfilter:searchReservation\">\n                                        <td>{{user.id}}</td>\n                                        <td>{{user.client}}</td>\n                                        <td>{{user.service}}</td>\n                                        <td>{{user.partner}}</td>\n                                        <td>{{user.reservationDate | date}}</td>\n                                        <td>{{user.isServed ? 'Served': 'Not Served'}}</td>\n                                        <td class=\"action paytablebtns maxwidth_action\">\n                                            <div class=\"tableaction_btn\">\n                                                <a class=\"action_button\">More..</a>\n                                                <ul class=\"actionlist_cont\">\n                                                    <li *ngIf=\"!user.isServed\">\n                                                        <a class=\"actionitem\" (click)=\"serveClient(user)\">Served</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </td>\n                                        <!-- <td class=\"text-primary\"> $36,738 </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/service-create/service-create.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/service-create/service-create.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsServiceCreateServiceCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title\">Create Partner Service</h4>\n                        <!-- <p class=\"card-category\">Complete your profile</p> -->\n                    </div>\n                    <div class=\"card-body\">\n                        <form #userform=\"ngForm\" (ngSubmit)=\"createPartnerService(userform)\" autocomplete=\"off\"\n                            novalidate>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <!-- <label class=\"bmd-label-floating\">Choose Service</label> -->\n                                        <select class=\"form-control\" id=\"businessServiceId\" name=\"businessServiceId\"\n                                            [(ngModel)]=\"partnerService.businessServiceId\">\n                                            <option value=\"\">Select Service</option>\n                                            <option *ngFor=\"let business of bussnessServices\" [value]=\"business.id\">\n                                                {{business.name}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"bmd-label-floating\">Price</label>\n                                        <input type=\"text\" id=\"price\" class=\"form-control\" name=\"price\"\n                                            [(ngModel)]=\"partnerService.price\">\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"bmd-label-floating\">Seats</label>\n                                        <input type=\"text\" id=\"seats\" class=\"form-control\" name=\"seats\"\n                                            [(ngModel)]=\"partnerService.seats\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"bmd-label-floating\">Minimum Duration</label>\n                                        <input type=\"text\" id=\"minDuration\" class=\"form-control\" name=\"minDuration\"\n                                            [(ngModel)]=\"partnerService.minDuration\">\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary pull-right\">Save</button>\n                            <button type=\"button\" (click)=\"closeForm()\"\n                                class=\"btn btn-danger pull-right\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/service-edit/service-edit.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/service-edit/service-edit.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsServiceEditServiceEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title\">Update Partner Service</h4>\n                        <!-- <p class=\"card-category\">Complete your profile</p> -->\n                    </div>\n                    <div class=\"card-body\">\n                        <form #userform=\"ngForm\" (ngSubmit)=\"createPartnerService(userform)\" autocomplete=\"off\"\n                            novalidate>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control\" id=\"businessServiceId\" name=\"businessServiceId\"\n                                            [(ngModel)]=\"partnerService.businessServiceId\">\n                                            <option value=\"\">Select Service</option>\n                                            <option *ngFor=\"let business of bussnessServices\" [value]=\"business.id\">\n                                                {{business.name}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" id=\"price\" class=\"form-control\" name=\"price\"\n                                            [(ngModel)]=\"partnerService.price\">\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" id=\"seats\" class=\"form-control\" name=\"seats\"\n                                            [(ngModel)]=\"partnerService.seats\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" id=\"minDuration\" class=\"form-control\" name=\"minDuration\"\n                                            [(ngModel)]=\"partnerService.minDuration\">\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary pull-right\">Update</button>\n                            <button type=\"button\" (click)=\"closeServiceEdit()\" class=\"btn btn-danger pull-right\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                        <a href=\"javascript:;\">\n                            <!-- <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" /> -->\n                            <img class=\"img\" [src]=\"'data:image/jpg;base64,'+partnerService?.imageData\">\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                        <h4 class=\"card-title\">Alec Thompson</h4>\n                        <!-- <p class=\"card-description\">\n                            Don't be scared of the truth because we need to restart the human foundation in truth And I\n                            love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                        </p> -->\n                        <input *ngIf=\"isChangingImageService\" #fileUpl class=\"file-uploader\" type=\"file\" id=\"btnUpload\"\n                            value=\"Upload\" (change)=\"fileChange1($event)\" />\n                        <a *ngIf=\"isChangingImageService\" href=\"javascript:;\" class=\"btn btn-primary btn-round\"\n                            (click)=\"savePartnerServiceImage()\">Submit</a>\n                        <a *ngIf=\"!isChangingImageService\" href=\"javascript:;\" class=\"btn btn-primary btn-round\"\n                            (click)=\"changeToUploadImage()\">Change Image</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"table-header\">\n                <div class=\"search_area\">\n                    <form class=\"navbar-form\">\n                        <div class=\"input-group no-border\">\n                            <input type=\"text\" name=\"searchPartnerService\" class=\"form-control\" [(ngModel)]=\"searchPartnerService\" placeholder=\"Search...\">\n                            <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                                <i class=\"material-icons\">search</i>\n                                <div class=\"ripple-container\"></div>\n                            </button>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"placement\">\n                    <button class=\"btn btn-primary\" (click)=\"newPartnerService()\">New</button>\n                </div>\n            </div>\n            <!-- <div class=\"table-header\">\n                <div class=\"search_area\">\n\n                </div>\n                <div class=\"col-md-4 placement\">\n                    <button class=\"btn btn-primary btn-block \" (click)=\"newPartnerService()\">New</button>\n                </div>\n            </div> -->\n           \n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title \">Partner Service</h4>\n                        <!-- <p class=\"card-category\"> Here is a subtitle for this table</p> -->\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>ID</th>\n                                    <th>Service</th>\n                                    <th>Price</th>\n                                    <th>Seats</th>\n                                    <th>Min Duration</th>\n                                    <!-- <th>Created On</th> -->\n                                    <th>Action </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of partnerServices |genericfilter:searchPartnerService\">\n                                        <td>{{user.id}}</td>\n                                        <td>{{user.service}}</td>\n                                        <td>{{user.price}}</td>\n                                        <td>{{user.seats}}</td>\n                                        <td>{{user.minDuration}}</td>\n                                        <!-- <td>{{user.createdOnDate | date}}</td> -->\n                                        <td class=\"action paytablebtns maxwidth_action\">\n                                            <div class=\"tableaction_btn\">\n                                                <a class=\"action_button\">More..</a>\n                                                <ul class=\"actionlist_cont\">\n                                                    <li>\n                                                        <a class=\"actionitem\"\n                                                            (click)=\"editPartnerService(user)\">Edit</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </td>\n                                        <!-- <td class=\"text-primary\"> $36,738 </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/template/template.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/template/template.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedTemplateTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper \">\n  <div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n    <!--\n        Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\n\n        Tip 2: you can also add an image using data-image tag\n    -->\n    <div class=\"logo\"><a href=\"http://www.creative-tim.com\" class=\"simple-text logo-normal\">\n        GAHUNDA\n      </a></div>\n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact: true}\">\n            <i class=\"material-icons\">dashboard</i>\n            <p>Dashboard</p>\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"currentUser.Role === '1'\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/user-list']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\">person</i>\n            <p>Users</p>\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"currentUser.Role === '1'\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/user-partners']\">\n            <i class=\"material-icons\">person</i>\n            <p>Partners</p>\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" *ngIf=\"currentUser.Role === '2'\"\n            [routerLink]=\"['/dashboard/services', currentUser.PartnerId]\">\n            <i class=\"material-icons\">room_service</i>\n            <p>Service</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/reservations']\">\n            <i class=\"material-icons\">person</i>\n            <p>Reservation</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/barbers']\">\n            <i class=\"material-icons\">person</i>\n            <p>Barbers</p>\n          </a>\n        </li>\n        <!-- <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./tables.html\">\n            <i class=\"material-icons\">content_paste</i>\n            <p>Table List</p>\n          </a>\n        </li> -->\n        <!-- <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./typography.html\">\n            <i class=\"material-icons\">library_books</i>\n            <p>Typography</p>\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./icons.html\">\n            <i class=\"material-icons\">bubble_chart</i>\n            <p>Icons</p>\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./map.html\">\n            <i class=\"material-icons\">location_ons</i>\n            <p>Maps</p>\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./notifications.html\">\n            <i class=\"material-icons\">notifications</i>\n            <p>Notifications</p>\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"./rtl.html\">\n            <i class=\"material-icons\">language</i>\n            <p>RTL Support</p>\n          </a>\n        </li>\n        <li class=\"nav-item active-pro \">\n          <a class=\"nav-link\" href=\"./upgrade.html\">\n            <i class=\"material-icons\">unarchive</i>\n            <p>Upgrade to PRO</p>\n          </a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n  <div class=\"main-panel\">\n    <!-- Navbar -->\n    <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:;\"></a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\">\n          <form class=\"navbar-form\">\n            <!-- <div class=\"input-group no-border\">\n              <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n              <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                <i class=\"material-icons\">search</i>\n                <div class=\"ripple-container\"></div>\n              </button>\n            </div> -->\n          </form>\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"javascript:;\">\n                <i class=\"material-icons\">dashboard</i>\n                <p class=\"d-lg-none d-md-block\">\n                  Stats\n                </p>\n              </a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p class=\"d-lg-none d-md-block\">\n                  Some Actions\n                </p>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link\" href=\"javascript:;\" id=\"navbarDropdownProfile\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">person</i>\n                <p class=\"d-lg-none d-md-block\">\n                  Account\n                </p>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownProfile\">\n                <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                <a class=\"dropdown-item\" href=\"#\">Settings</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"logout()\">Log out</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <!-- End Navbar -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n\n\n\n\n\n    <!-- <div class=\"content\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <div class=\"card-header card-header-warning card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">content_copy</i>\n                  </div>\n                  <p class=\"card-category\">Used Space</p>\n                  <h3 class=\"card-title\">49/50\n                    <small>GB</small>\n                  </h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons text-danger\">warning</i>\n                    <a href=\"javascript:;\">Get More Space...</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <div class=\"card-header card-header-success card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">store</i>\n                  </div>\n                  <p class=\"card-category\">Revenue</p>\n                  <h3 class=\"card-title\">$34,245</h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">date_range</i> Last 24 Hours\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <div class=\"card-header card-header-danger card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">info_outline</i>\n                  </div>\n                  <p class=\"card-category\">Fixed Issues</p>\n                  <h3 class=\"card-title\">75</h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">local_offer</i> Tracked from Github\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                <div class=\"card-header card-header-info card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </div>\n                  <p class=\"card-category\">Followers</p>\n                  <h3 class=\"card-title\">+245</h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">update</i> Just Updated\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                <div class=\"card-header card-header-success\">\n                  <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Daily Sales</h4>\n                  <p class=\"card-category\">\n                    <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                <div class=\"card-header card-header-warning\">\n                  <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Email Subscriptions</h4>\n                  <p class=\"card-category\">Last Campaign Performance</p>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                <div class=\"card-header card-header-danger\">\n                  <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Completed Tasks</h4>\n                  <p class=\"card-category\">Last Campaign Performance</p>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-tabs card-header-primary\">\n                  <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                      <span class=\"nav-tabs-title\">Tasks:</span>\n                      <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                            <i class=\"material-icons\">bug_report</i> Bugs\n                            <div class=\"ripple-container\"></div>\n                          </a>\n                        </li>\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                            <i class=\"material-icons\">code</i> Website\n                            <div class=\"ripple-container\"></div>\n                          </a>\n                        </li>\n                        <li class=\"nav-item\">\n                          <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                            <i class=\"material-icons\">cloud</i> Server\n                            <div class=\"ripple-container\"></div>\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"profile\">\n                      <table class=\"table\">\n                        <tbody>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                            </td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <div class=\"tab-pane\" id=\"messages\">\n                      <table class=\"table\">\n                        <tbody>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                            </td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <div class=\"tab-pane\" id=\"settings\">\n                      <table class=\"table\">\n                        <tbody>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                            </td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                            <td class=\"td-actions text-right\">\n                              <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-link btn-sm\">\n                                <i class=\"material-icons\">edit</i>\n                              </button>\n                              <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-link btn-sm\">\n                                <i class=\"material-icons\">close</i>\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-warning\">\n                  <h4 class=\"card-title\">Employees Stats</h4>\n                  <p class=\"card-category\">New employees on 15th September, 2016</p>\n                </div>\n                <div class=\"card-body table-responsive\">\n                  <table class=\"table table-hover\">\n                    <thead class=\"text-warning\">\n                      <th>ID</th>\n                      <th>Name</th>\n                      <th>Salary</th>\n                      <th>Country</th>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1</td>\n                        <td>Dakota Rice</td>\n                        <td>$36,738</td>\n                        <td>Niger</td>\n                      </tr>\n                      <tr>\n                        <td>2</td>\n                        <td>Minerva Hooper</td>\n                        <td>$23,789</td>\n                        <td>Curaçao</td>\n                      </tr>\n                      <tr>\n                        <td>3</td>\n                        <td>Sage Rodriguez</td>\n                        <td>$56,142</td>\n                        <td>Netherlands</td>\n                      </tr>\n                      <tr>\n                        <td>4</td>\n                        <td>Philip Chaney</td>\n                        <td>$38,735</td>\n                        <td>Korea, South</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <footer class=\"footer\">\n      <div class=\"container-fluid\">\n        <nav class=\"float-left\">\n          <ul>\n            <li>\n              <a >\n                IHOHO Team\n              </a>\n            </li>\n            <li>\n              <a >\n                About Us\n              </a>\n            </li>\n            <!-- <li>\n              <a>\n                Blog\n              </a>\n            </li>\n            <li>\n              <a>\n                Licenses\n              </a>\n            </li> -->\n          </ul>\n        </nav>\n        <!-- <div class=\"copyright float-right\">\n          &copy;\n          <script>\n            document.write(new Date().getFullYear())\n          </script>, made with <i class=\"material-icons\">favorite</i> by\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div> -->\n      </div>\n    </footer>\n  </div>\n</div>\n<div class=\"fixed-plugin\">";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserEditUserEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n<form [formGroup]=\"ownerForm\" class=\"normal-form\" (ngSubmit)=\"onSubmit()\">\n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n        <mat-grid-tile>\n            <div class=\"controles-container\">\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Names*\" formControlName=\"names\" id=\"names\">\n                    <mat-hint align=\"end\">Not more then 20 characters long.</mat-hint>\n                    <mat-error *ngIf=\"hasError('names', 'required')\">Names is required</mat-error>\n                    <mat-error *ngIf=\"hasError('names', 'maxlength')\">You have more than 60 characters</mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Username*\" formControlName=\"username\" id=\"username\">\n                    <mat-hint align=\"end\">Not more then 20 characters long.</mat-hint>\n                    <mat-error *ngIf=\"hasError('username', 'required')\">Username is required</mat-error>\n                    <mat-error *ngIf=\"hasError('username', 'maxlength')\">You have more than 60 characters</mat-error>\n                </mat-form-field>\n\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"controles-container\">\n                <mat-form-field>\n                    <mat-select formControlName=\"roleId\" id=\"username\" placeholder=\"Roles\">\n                        <mat-option>None</mat-option>\n                        <ng-container *ngFor=\"let role of roles\">\n                            <mat-option value=\"{{role.id}}\">{{role.name}}</mat-option>\n                        </ng-container>\n                    </mat-select>\n                </mat-form-field>\n               \n                <div class=\"button-row\">\n                    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n                    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"onClear()\">Clear</button>\n                </div>\n            </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n</form> -->\n\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <h4 class=\"card-title\">Create User</h4>\n            <!-- <p class=\"card-category\">Complete your profile</p> -->\n          </div>\n          <div class=\"card-body\">\n            <form #userform=\"ngForm\" (ngSubmit)=\"onSubmit(userform)\" autocomplete=\"off\" novalidate>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\">\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Names</label>\n                    <input type=\"text\" class=\"form-control\" name=\"names\" [(ngModel)]=\"user.names\">\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <!-- <label class=\"bmd-label-floating\">Role</label> -->\n                    <!-- <input type=\"email\" class=\"form-control\"> -->\n                    <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"user.roleId\">\n                      <option value=\"\">Select Role</option>\n                      <option *ngFor=\"let role of roles\" [value]=\"role.id\">{{role.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Fist Name</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Adress</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">City</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Country</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Postal Code</label>\n                      <input type=\"text\" class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>About Me</label>\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                        <textarea class=\"form-control\" rows=\"5\"></textarea>\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n                \n\n                <button type=\"submit\" class=\"btn btn-primary pull-right\">Submit</button>\n                <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"closeForm()\">Cancel</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card card-profile\">\n          <div class=\"card-avatar\">\n            <a href=\"javascript:;\">\n              <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\n            </a>\n          </div>\n          <!-- <div class=\"card-body\">\n              <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n              <h4 class=\"card-title\">Alec Thompson</h4>\n              <p class=\"card-description\">\n                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n              </p>\n              <a href=\"javascript:;\" class=\"btn btn-primary btn-round\">Follow</a>\n            </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" [hidden]=\"isNewUser\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"table-header\">\n                <div class=\"search_area\">\n                    <form class=\"navbar-form\">\n                        <div class=\"input-group no-border\">\n                          <input type=\"text\" name=\"searchUser\" [(ngModel)]=\"searchUser\" class=\"form-control\" placeholder=\"Search...\">\n                          <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                            <i class=\"material-icons\">search</i>\n                            <div class=\"ripple-container\"></div>\n                          </button>\n                        </div>\n                      </form>\n                </div>\n                <div class=\"placement\">\n                    <button class=\"btn btn-primary\" (click)=\"newEmployee()\">New</button>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-4 placement\">\n                <button class=\"btn btn-primary btn-block \" (click)=\"newEmployee()\">New</button>\n            </div> -->\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title \">Users</h4>\n                        <!-- <p class=\"card-category\"> Here is a subtitle for this table</p> -->\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>Names</th>\n                                    <th>Role</th>\n                                    <th>Created On</th>\n                                    <!-- <th>City</th> -->\n                                    <!-- <th>Salary </th> -->\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of users |genericfilter:searchUser\">\n                                        <td>{{user.names}}</td>\n                                        <td>{{user.role}}</td>\n                                        <td>{{user.createdOnDate | date}}</td>\n\n                                        <!-- <td class=\"text-primary\"> $36,738 </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header card-header-primary\">\n                        <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                        <p class=\"card-category\"> Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead class=\"\">\n                                    <th>\n                                        ID\n                                    </th>\n                                    <th>\n                                        Name\n                                    </th>\n                                    <th>\n                                        Country\n                                    </th>\n                                    <th>\n                                        City\n                                    </th>\n                                    <th>\n                                        Salary\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            1\n                                        </td>\n                                        <td>\n                                            Dakota Rice\n                                        </td>\n                                        <td>\n                                            Niger\n                                        </td>\n                                        <td>\n                                            Oud-Turnhout\n                                        </td>\n                                        <td>\n                                            $36,738\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            2\n                                        </td>\n                                        <td>\n                                            Minerva Hooper\n                                        </td>\n                                        <td>\n                                            Curaçao\n                                        </td>\n                                        <td>\n                                            Sinaai-Waas\n                                        </td>\n                                        <td>\n                                            $23,789\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            3\n                                        </td>\n                                        <td>\n                                            Sage Rodriguez\n                                        </td>\n                                        <td>\n                                            Netherlands\n                                        </td>\n                                        <td>\n                                            Baileux\n                                        </td>\n                                        <td>\n                                            $56,142\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            4\n                                        </td>\n                                        <td>\n                                            Philip Chaney\n                                        </td>\n                                        <td>\n                                            Korea, South\n                                        </td>\n                                        <td>\n                                            Overland Park\n                                        </td>\n                                        <td>\n                                            $38,735\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            5\n                                        </td>\n                                        <td>\n                                            Doris Greene\n                                        </td>\n                                        <td>\n                                            Malawi\n                                        </td>\n                                        <td>\n                                            Feldkirchen in Kärnten\n                                        </td>\n                                        <td>\n                                            $63,542\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            6\n                                        </td>\n                                        <td>\n                                            Mason Porter\n                                        </td>\n                                        <td>\n                                            Chile\n                                        </td>\n                                        <td>\n                                            Gloucester\n                                        </td>\n                                        <td>\n                                            $78,615\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>\n\n\n\n<app-user-edit *ngIf=\"isNewUser\" (backToUser)=\"closeCreateUser($event)\"></app-user-edit>";
    /***/
  },

  /***/
  "./src/app/components/barber-edit/barber-edit.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/barber-edit/barber-edit.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBarberEditBarberEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form.normal-form {\n  margin: 50px;\n}\n\n.controles-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controles-container > * {\n  width: 100%;\n}\n\n.add-bottom-padding {\n  padding-bottom: 10px;\n}\n\nmat-radio-group mat-radio-button {\n  margin-left: 5px;\n}\n\n.button-row button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXJiZXItZWRpdC9FOlxcQW5ndWxhclByb2plY3RcXGlob2hvLXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxiYXJiZXItZWRpdFxcYmFyYmVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFyYmVyLWVkaXQvYmFyYmVyLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBREtBO0VBQ0ksb0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FEU0E7RUFDSSxXQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhcmJlci1lZGl0L2JhcmJlci1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWF0LWZvcm0tZmllbGR7XHJcbi8vICAgICB3aWR0aDogNDAwcHg7XHJcbi8vIH1cclxuXHJcbmZvcm0ubm9ybWFsLWZvcm0ge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59XHJcbi5jb250cm9sZXMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNvbnRyb2xlcy1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWRkLWJvdHRvbS1wYWRkaW5ne1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4vLyBtYXQtY2FyZC10aXRsZXtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiZm9ybS5ub3JtYWwtZm9ybSB7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLmNvbnRyb2xlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWJvdHRvbS1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/barber-edit/barber-edit.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/barber-edit/barber-edit.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BarberEditComponent */

  /***/
  function srcAppComponentsBarberEditBarberEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarberEditComponent", function () {
      return BarberEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/users/user.service */
    "./src/app/services/users/user.service.ts");

    var BarberEditComponent = /*#__PURE__*/function () {
      function BarberEditComponent(userService, router) {
        _classCallCheck(this, BarberEditComponent);

        this.userService = userService;
        this.router = router;
        this.barbers = [];
        this.partner = {};
      }

      _createClass(BarberEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBarbers();
        }
      }, {
        key: "getBarbers",
        value: function getBarbers() {
          var _this = this;

          this.userService.getBarbers().subscribe(function (data) {
            _this.barbers = data;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this2 = this;

          if (form.invalid) {
            return;
          } else {
            this.userService.createBarber(this.partner).subscribe(function (data) {
              _this2.getBarbers();

              _this2.closePartner();
            }, function (error) {
              console.log(error + '');
            });
          }
        }
      }, {
        key: "closePartner",
        value: function closePartner() {
          this.router.navigate(['/dashboard/barbers']);
        }
      }]);

      return BarberEditComponent;
    }();

    BarberEditComponent.ctorParameters = function () {
      return [{
        type: src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BarberEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-barber-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./barber-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/barber-edit/barber-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./barber-edit.component.scss */
      "./src/app/components/barber-edit/barber-edit.component.scss"))["default"]]
    })], BarberEditComponent); // export interface PartnerForCreation {
    //   name: string;
    //   location: string;
    //   email: string;
    //   phone: string;
    //   momoCode: string;
    //   userId: string;
    // }

    /***/
  },

  /***/
  "./src/app/components/barbers/barbers.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/barbers/barbers.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBarbersBarbersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-group {\n  padding-bottom: 10px;\n  position: relative;\n  margin: 10px 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXJiZXJzL0U6XFxBbmd1bGFyUHJvamVjdFxcaWhvaG8tdWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJhcmJlcnNcXGJhcmJlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFyYmVycy9iYXJiZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhcmJlcnMvYmFyYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5uYXZiYXItZm9ybXtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vIH1cclxuLy8gLmNvbC1tZC02IHtcclxuLy8gICAgIGZsZXg6IDE7XHJcbi8vICAgICAvLyBwYWRkaW5nOiAwcHggMHB4IDBweCA0MDBweDtcclxuLy8gfVxyXG5cclxuLy8gLmlucHV0LWdyb3Vwe1xyXG4vLyAgICAgZmxleDogMTtcclxuLy8gfVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwICFpbXBvcnRhbnQ7XHJcbn0iLCIuZm9ybS1ncm91cCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweCAwIDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/barbers/barbers.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/barbers/barbers.component.ts ***!
    \*********************************************************/

  /*! exports provided: BarbersComponent */

  /***/
  function srcAppComponentsBarbersBarbersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarbersComponent", function () {
      return BarbersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/operations/operation.service */
    "./src/app/services/operations/operation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/users/user.service */
    "./src/app/services/users/user.service.ts");

    var BarbersComponent = /*#__PURE__*/function () {
      function BarbersComponent(operationService, configuration, userService, router // private alertService: ToasterSer
      ) {
        _classCallCheck(this, BarbersComponent);

        this.operationService = operationService;
        this.configuration = configuration;
        this.userService = userService;
        this.router = router;
        this.barbers = [];
        this.viewbarbers = [];
      }

      _createClass(BarbersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBarbers();
        }
      }, {
        key: "getBarbers",
        value: function getBarbers() {
          var _this3 = this;

          this.userService.getBarbers().subscribe(function (data) {
            _this3.barbers = data;
          });
        } // serveClient(event) {
        //   this.operationService.serveClient(event.id)
        //     .subscribe(
        //       data => { this.loadReservations(); },
        //       error => { }
        //     )
        // }
        // filtering application

      }, {
        key: "filterSessions",
        value: function filterSessions(firter) {
          console.log(firter);

          if (firter === '0') {
            this.viewbarbers = this.barbers;
          } else {
            this.viewbarbers = this.barbers.filter(function (session) {
              console.log(session.isServed.toString());
              return session.isServed.toString() === firter + '';
            });
          }
        }
      }, {
        key: "newBarber",
        value: function newBarber() {
          this.router.navigate(['dashboard/barber-edit']);
        }
      }]);

      return BarbersComponent;
    }();

    BarbersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"]
      }, {
        type: src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]
      }, {
        type: src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    BarbersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-barbers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./barbers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/barbers/barbers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./barbers.component.scss */
      "./src/app/components/barbers/barbers.component.scss"))["default"]]
    })], BarbersComponent);
    /***/
  },

  /***/
  "./src/app/components/home-page/home-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/home-page/home-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppComponentsHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/components/home-page/home-page.component.scss"))["default"]]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/components/partner-edit/partner-edit.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/partner-edit/partner-edit.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPartnerEditPartnerEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form.normal-form {\n  margin: 50px;\n}\n\n.controles-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controles-container > * {\n  width: 100%;\n}\n\n.add-bottom-padding {\n  padding-bottom: 10px;\n}\n\nmat-radio-group mat-radio-button {\n  margin-left: 5px;\n}\n\n.button-row button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVyLWVkaXQvRTpcXEFuZ3VsYXJQcm9qZWN0XFxpaG9oby11aS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFydG5lci1lZGl0XFxwYXJ0bmVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1lZGl0L3BhcnRuZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFlBQUE7QUNISjs7QURLQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0FDRko7O0FES0E7RUFDSSxvQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURTQTtFQUNJLFdBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lci1lZGl0L3BhcnRuZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hdC1mb3JtLWZpZWxke1xyXG4vLyAgICAgd2lkdGg6IDQwMHB4O1xyXG4vLyB9XHJcblxyXG5mb3JtLm5vcm1hbC1mb3JtIHtcclxuICAgIG1hcmdpbjogNTBweDtcclxufVxyXG4uY29udHJvbGVzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFkZC1ib3R0b20tcGFkZGluZ3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLy8gbWF0LWNhcmQtdGl0bGV7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcblxyXG4uYnV0dG9uLXJvdyBidXR0b257XHJcbiAgICBtYXJnaW46IDVweDtcclxufSIsImZvcm0ubm9ybWFsLWZvcm0ge1xuICBtYXJnaW46IDUwcHg7XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY29udHJvbGVzLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC1ib3R0b20tcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5tYXQtcmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5idXR0b24tcm93IGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/partner-edit/partner-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/partner-edit/partner-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PartnerEditComponent */

  /***/
  function srcAppComponentsPartnerEditPartnerEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnerEditComponent", function () {
      return PartnerEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/users/user.service */
    "./src/app/services/users/user.service.ts");

    var PartnerEditComponent = /*#__PURE__*/function () {
      function PartnerEditComponent(userService, router) {
        _classCallCheck(this, PartnerEditComponent);

        this.userService = userService;
        this.router = router;
        this.partner = {};
      }

      _createClass(PartnerEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this4 = this;

          if (form.invalid) {
            return;
          } else {
            this.userService.createPartner(this.partner).subscribe(function (data) {
              _this4.closePartner();

              console.log('well done');
            }, function (error) {
              console.log(error + '');
            });
          }
        }
      }, {
        key: "closePartner",
        value: function closePartner() {
          this.router.navigate(['/dashboard/user-partners']);
        }
      }]);

      return PartnerEditComponent;
    }();

    PartnerEditComponent.ctorParameters = function () {
      return [{
        type: src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PartnerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-partner-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./partner-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partner-edit/partner-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./partner-edit.component.scss */
      "./src/app/components/partner-edit/partner-edit.component.scss"))["default"]]
    })], PartnerEditComponent);
    /***/
  },

  /***/
  "./src/app/components/partners/partners.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/partners/partners.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPartnersPartnersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  float: right;\n}\n\n.paytablebtns {\n  width: 16rem;\n}\n\n.tableaction_btn {\n  width: 4rem;\n  height: 1.75rem;\n  border-radius: 0.25rem;\n  border: 1px solid var(--maincl-lght);\n  transition: background-color 200ms ease;\n  position: relative;\n  z-index: 9;\n}\n\n.tableaction_btn .action_button {\n  width: 100%;\n  font-size: 0.75rem;\n  color: var(--fngrey);\n  padding: 0 0.75rem;\n  text-align: center;\n  display: block;\n  line-height: 1.75rem;\n}\n\n.tableaction_btn:hover {\n  background-color: var(--maincl-drk);\n  border-radius: 0 0.25rem 0.25rem 0;\n  box-shadow: 0px 5px 5px 0px rgba(42, 119, 144, 0.2);\n  -moz-box-shadow: 0px 5px 5px 0px rgba(42, 119, 144, 0.2);\n  -webkit-box-shadow: 0px 5px 5px 0px rgba(42, 119, 144, 0.2);\n}\n\n.tableaction_btn:hover .actionlist_cont {\n  transform: translateX(0);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.tableaction_btn .actionlist_cont {\n  position: absolute;\n  top: 0;\n  right: 4rem;\n  max-width: 8rem;\n  min-width: 6.25rem;\n  background-color: var(--maincl);\n  transition: all 300ms ease;\n  transform: translateX(2rem);\n  border-radius: 0.25rem 0 0.25rem 0.25rem;\n  overflow: hidden;\n  opacity: 0;\n  z-index: -1;\n  pointer-events: none;\n  box-shadow: 0px 5px 5px 0px rgba(42, 119, 144, 0.2);\n  -moz-box-shadow: 0px 5px 5px 0px rgba(42, 119, 144, 0.2);\n  -webkit-box-shadow: 0px 5px 5px 0px rgba(42, 119, 144, 0.2);\n}\n\n.tableaction_btn .actionlist_cont tr {\n  border-collapse: collapse;\n  border-bottom: 1px solid rgba(166, 211, 223, 0.35);\n  transition: background-color 200ms ease;\n  cursor: pointer;\n}\n\n.tableaction_btn .actionlist_cont tr:nth-child(even) {\n  background-color: rgba(166, 211, 223, 0.15);\n}\n\n.tableaction_btn .actionlist_cont tr td {\n  padding: 0.5rem;\n  font-size: 0.75rem;\n  flex: 1;\n}\n\n.tableaction_btn .actionlist_cont tr td h4 {\n  font-size: 0.75rem;\n}\n\n.tableaction_btn .actionlist_cont .actionitem {\n  display: block;\n  font-size: 0.75rem;\n  color: #fff;\n  padding: 0 0.875rem;\n  line-height: 1.75rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.tableaction_btn .actionlist_cont .actionitem:hover {\n  background-color: var(--maincl-drk);\n}\n\n.tableaction_btn .actionlist_cont .disable_btn {\n  cursor: not-allowed;\n  color: var(--fngrey);\n}\n\n.maxwidth_action {\n  max-width: 6rem;\n  width: 6rem;\n}\n\n.paytablebtns {\n  padding: 0.35rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJ0bmVycy9FOlxcQW5ndWxhclByb2plY3RcXGlob2hvLXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYXJ0bmVyc1xccGFydG5lcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lcnMvcGFydG5lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FET0U7RUFDRSx5SEFBQTtFQUNBLFlBQUE7QUNKSjs7QURPRTtFQUNFLFlBQUE7QUNKSjs7QURPQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDTEY7O0FETUU7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNKTjs7QUR1Q0U7RUFDRSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbURBQUE7RUFDQSx3REFBQTtFQUNBLDJEQUFBO0FDckNKOztBRHVDSTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDckNOOztBRHlDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUVBLG1EQUFBO0VBQ0Esd0RBQUE7RUFDQSwyREFBQTtBQ3hDSjs7QUR5Q0k7RUFDRSx5QkFBQTtFQUNBLGtEQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FDdkNOOztBRHdDTTtFQUNFLDJDQUFBO0FDdENSOztBRHdDTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUN0Q1I7O0FEdUNRO0VBQ0Usa0JBQUE7QUNyQ1Y7O0FEeUNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDdkNOOztBRHdDTTtFQUNFLG1DQUFBO0FDdENSOztBRDBDSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUN4Q1I7O0FEOENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUMzQ0Y7O0FENkNBO0VBQ0MsZ0JBQUE7QUMxQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbiAgfVxyXG5cclxuICAvLyBtYXQtcmFpc2VkLWJ1dHRvbntcclxuICAvLyAgIHBhZGRpbmc6IDEwMHB4IDEwMHB4IDA7XHJcbiAgLy8gICBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gfVxyXG5cclxuICAubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5wYXl0YWJsZWJ0bnN7XHJcbiAgICB3aWR0aDogMTZyZW07XHJcbn1cclxuXHJcbi50YWJsZWFjdGlvbl9idG57XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluY2wtbGdodCk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5O1xyXG4gIC5hY3Rpb25fYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWZuZ3JleSk7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcblxyXG4gIC8vICAgLmRvdCB7XHJcbiAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vICAgICB3aWR0aDogNHB4O1xyXG4gIC8vICAgICBoZWlnaHQ6IDRweDtcclxuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNsKTtcclxuICAvLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC44NzVyZW0pO1xyXG4gIC8vICAgICAmOmJlZm9yZSB7XHJcbiAgLy8gICAgICAgY29udGVudDogXCJcIjtcclxuICAvLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gICAgICAgd2lkdGg6IDRweDtcclxuICAvLyAgICAgICBoZWlnaHQ6IDRweDtcclxuICAvLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW5jbCk7XHJcbiAgLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC8vICAgICAgIGxlZnQ6IDA7XHJcbiAgLy8gICAgICAgdG9wOiAtMC41cmVtO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgICY6YWZ0ZXIge1xyXG4gIC8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgLy8gICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNsKTtcclxuICAvLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy8gICAgICAgbGVmdDogMDtcclxuICAvLyAgICAgICB0b3A6IDAuNXJlbTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5jbC1kcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAuMjVyZW0gLjI1cmVtIDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgjMmE3NzkwLCAwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgjMmE3NzkwLCAwLjIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgjMmE3NzkwLCAwLjIpO1xyXG5cclxuICAgIC5hY3Rpb25saXN0X2NvbnQge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9ubGlzdF9jb250IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiA0cmVtO1xyXG4gICAgbWF4LXdpZHRoOiA4cmVtO1xyXG4gICAgbWluLXdpZHRoOiA2LjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNsKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtIDAgLjI1cmVtIC4yNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgjMmE3NzkwLCAwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgjMmE3NzkwLCAwLjIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgjMmE3NzkwLCAwLjIpO1xyXG4gICAgdHIge1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjYTZkM2RmLCAwLjM1KTtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNhNmQzZGYsIDAuMTUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGlvbml0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMCAuODc1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbmNsLWRyayk7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoIzJhNzc5MCwgMC4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpc2FibGVfYnRue1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWZuZ3JleSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1heHdpZHRoX2FjdGlvbntcclxuICBtYXgtd2lkdGg6IDZyZW07XHJcbiAgd2lkdGg6IDZyZW07XHJcbn1cclxuLnBheXRhYmxlYnRuc3tcclxuIHBhZGRpbmc6IC4zNXJlbTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gICAucGF5dGFibGVidG5ze1xyXG4vLyAgICAgd2lkdGg6IDE2cmVtO1xyXG4vLyB9IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucGF5dGFibGVidG5zIHtcbiAgd2lkdGg6IDE2cmVtO1xufVxuXG4udGFibGVhY3Rpb25fYnRuIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMS43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbmNsLWxnaHQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbn1cbi50YWJsZWFjdGlvbl9idG4gLmFjdGlvbl9idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tZm5ncmV5KTtcbiAgcGFkZGluZzogMCAwLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50YWJsZWFjdGlvbl9idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY2wtZHJrKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoNDIsIDExOSwgMTQ0LCAwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDQyLCAxMTksIDE0NCwgMC4yKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSg0MiwgMTE5LCAxNDQsIDAuMik7XG59XG4udGFibGVhY3Rpb25fYnRuOmhvdmVyIC5hY3Rpb25saXN0X2NvbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4udGFibGVhY3Rpb25fYnRuIC5hY3Rpb25saXN0X2NvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDRyZW07XG4gIG1heC13aWR0aDogOHJlbTtcbiAgbWluLXdpZHRoOiA2LjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY2wpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMC4yNXJlbSAwLjI1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDQyLCAxMTksIDE0NCwgMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSg0MiwgMTE5LCAxNDQsIDAuMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoNDIsIDExOSwgMTQ0LCAwLjIpO1xufVxuLnRhYmxlYWN0aW9uX2J0biAuYWN0aW9ubGlzdF9jb250IHRyIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTY2LCAyMTEsIDIyMywgMC4zNSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYmxlYWN0aW9uX2J0biAuYWN0aW9ubGlzdF9jb250IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY2LCAyMTEsIDIyMywgMC4xNSk7XG59XG4udGFibGVhY3Rpb25fYnRuIC5hY3Rpb25saXN0X2NvbnQgdHIgdGQge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZmxleDogMTtcbn1cbi50YWJsZWFjdGlvbl9idG4gLmFjdGlvbmxpc3RfY29udCB0ciB0ZCBoNCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50YWJsZWFjdGlvbl9idG4gLmFjdGlvbmxpc3RfY29udCAuYWN0aW9uaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGFibGVhY3Rpb25fYnRuIC5hY3Rpb25saXN0X2NvbnQgLmFjdGlvbml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluY2wtZHJrKTtcbn1cbi50YWJsZWFjdGlvbl9idG4gLmFjdGlvbmxpc3RfY29udCAuZGlzYWJsZV9idG4ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBjb2xvcjogdmFyKC0tZm5ncmV5KTtcbn1cblxuLm1heHdpZHRoX2FjdGlvbiB7XG4gIG1heC13aWR0aDogNnJlbTtcbiAgd2lkdGg6IDZyZW07XG59XG5cbi5wYXl0YWJsZWJ0bnMge1xuICBwYWRkaW5nOiAwLjM1cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/partners/partners.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/partners/partners.component.ts ***!
    \***********************************************************/

  /*! exports provided: PartnersComponent */

  /***/
  function srcAppComponentsPartnersPartnersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnersComponent", function () {
      return PartnersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_users_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/users/user.service */
    "./src/app/services/users/user.service.ts");

    var PartnersComponent = /*#__PURE__*/function () {
      function PartnersComponent(userService, router) {
        _classCallCheck(this, PartnersComponent);

        this.userService = userService;
        this.router = router;
        this.partners = []; // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'type', 'action'];

        this.displayedColumns = ['name', 'location', 'email', 'phone', 'momoCode'];
      }

      _createClass(PartnersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUsers('none');
        }
      }, {
        key: "loadUsers",
        value: function loadUsers(value) {
          var _this5 = this;

          this.userService.getPartners().subscribe(function (data) {
            _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this5.dataSource.paginator = _this5.paginator;
            _this5.partners = data; // this.table.renderRows();
            // if (value === 'add' || value === 'delete') {
            //   window.location.reload();
            // }

            _this5.isNewUser = true;
          }, function (error) {
            console.log(error + '');
          });
        }
      }, {
        key: "newEmployee",
        value: function newEmployee() {
          this.isNewUser = true;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "backToProduct",
        value: function backToProduct(even) {
          // if (even) {}
          this.loadUsers('add');
          this.isNewUser = even;
        }
      }, {
        key: "openDialog",
        value: function openDialog(element) {// const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
          //   width: '250px',
          //   data: {name: element.name, productid: element.id}
          // });
          // dialogRef.afterClosed().subscribe(result => {
          //   console.log('The dialog was closed');
          //   this.animal = result;
          // });
        }
      }, {
        key: "newPartner",
        value: function newPartner() {
          this.router.navigate(['dashboard/user-partner-edit']);
        }
      }, {
        key: "addService",
        value: function addService(partner) {
          this.router.navigate(['/dashboard/services', partner.id]);
        }
      }]);

      return PartnersComponent;
    }();

    PartnersComponent.ctorParameters = function () {
      return [{
        type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', {
      "static": false
    })], PartnersComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], PartnersComponent.prototype, "paginator", void 0);
    PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-partners',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./partners.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./partners.component.scss */
      "./src/app/components/partners/partners.component.scss"))["default"]]
    })], PartnersComponent);
    /***/
  },

  /***/
  "./src/app/components/reservations/reservations.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/reservations/reservations.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsReservationsReservationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-group {\n  padding-bottom: 10px;\n  position: relative;\n  margin: 10px 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNlcnZhdGlvbnMvRTpcXEFuZ3VsYXJQcm9qZWN0XFxpaG9oby11aS9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVzZXJ2YXRpb25zXFxyZXNlcnZhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm5hdmJhci1mb3Jte1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gfVxyXG4vLyAuY29sLW1kLTYge1xyXG4vLyAgICAgZmxleDogMTtcclxuLy8gICAgIC8vIHBhZGRpbmc6IDBweCAwcHggMHB4IDQwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5wdXQtZ3JvdXB7XHJcbi8vICAgICBmbGV4OiAxO1xyXG4vLyB9XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMTBweCAwIDAgIWltcG9ydGFudDtcclxufSIsIi5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4IDAgMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/reservations/reservations.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/reservations/reservations.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ReservationsComponent */

  /***/
  function srcAppComponentsReservationsReservationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function () {
      return ReservationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/operations/operation.service */
    "./src/app/services/operations/operation.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var ReservationsComponent = /*#__PURE__*/function () {
      function ReservationsComponent(operationService, configuration) {
        _classCallCheck(this, ReservationsComponent);

        this.operationService = operationService;
        this.configuration = configuration;
        this.reservations = [];
        this.viewReservations = [];
      }

      _createClass(ReservationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadReservations();
        }
      }, {
        key: "loadReservations",
        value: function loadReservations() {
          var _this6 = this;

          // console.log(jwt_decode(localStorage.getItem(this.configuration.JWT_Token)));
          if (jwt_decode__WEBPACK_IMPORTED_MODULE_3__(localStorage.getItem(this.configuration.JWT_Token)).Role === '1') {
            this.operationService.getReservations().subscribe(function (data) {
              _this6.reservations = data;
              _this6.viewReservations = _this6.reservations;
            }, function (error) {});
          } else if (jwt_decode__WEBPACK_IMPORTED_MODULE_3__(localStorage.getItem(this.configuration.JWT_Token)).Role === '2') {
            this.operationService.getReservationByPartnerId().subscribe(function (data) {
              _this6.reservations = data;
              _this6.viewReservations = _this6.reservations;
            }, function (error) {});
          } // this.const user = jwt_decode(localStorage.getItem(this.configuration.JWT_Token));

        }
      }, {
        key: "serveClient",
        value: function serveClient(event) {
          var _this7 = this;

          this.operationService.serveClient(event.id).subscribe(function (data) {
            _this7.loadReservations();
          }, function (error) {});
        } // filtering application

      }, {
        key: "filterSessions",
        value: function filterSessions(firter) {
          console.log(firter);

          if (firter === '0') {
            this.viewReservations = this.reservations;
          } else {
            this.viewReservations = this.reservations.filter(function (session) {
              console.log(session.isServed.toString());
              return session.isServed.toString() === firter + '';
            });
          }
        }
      }]);

      return ReservationsComponent;
    }();

    ReservationsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"]
      }, {
        type: src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"]
      }];
    };

    ReservationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reservations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reservations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reservations/reservations.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reservations.component.scss */
      "./src/app/components/reservations/reservations.component.scss"))["default"]]
    })], ReservationsComponent);
    /***/
  },

  /***/
  "./src/app/components/service-create/service-create.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/service-create/service-create.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsServiceCreateServiceCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZS1jcmVhdGUvc2VydmljZS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/service-create/service-create.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/service-create/service-create.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ServiceCreateComponent */

  /***/
  function srcAppComponentsServiceCreateServiceCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceCreateComponent", function () {
      return ServiceCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/operations/operation.service */
    "./src/app/services/operations/operation.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var ServiceCreateComponent = /*#__PURE__*/function () {
      function ServiceCreateComponent(route, operationService, router, configuration) {
        var _this8 = this;

        _classCallCheck(this, ServiceCreateComponent);

        this.route = route;
        this.operationService = operationService;
        this.router = router;
        this.configuration = configuration;
        this.bussnessServices = [];
        this.partnerService = {};
        this.route.params.subscribe(function (params) {
          _this8.partnerId = params.partnerId;
        });
      }

      _createClass(ServiceCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadBusinessServices();
        }
      }, {
        key: "loadBusinessServices",
        value: function loadBusinessServices() {
          var _this9 = this;

          this.operationService.getBusinessServices().subscribe(function (data) {
            _this9.bussnessServices = data;
          }, function (error) {});
        }
      }, {
        key: "createPartnerService",
        value: function createPartnerService(form) {
          var _this10 = this;

          if (form.invalid) {
            return;
          } else {
            this.partnerService.partnerId = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).Role === '1' ? +localStorage.getItem('PartnerId') : jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).PartnerId;
            console.log(this.partnerService);
            this.operationService.createPartnerService(this.partnerService).subscribe(function (data) {
              _this10.closeForm();
            }, function (error) {});
          }
        }
      }, {
        key: "closeForm",
        value: function closeForm() {
          if (jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).Role === '1') {
            this.router.navigate(['/dashboard/services', localStorage.getItem('PartnerId')]);
          } else {
            this.router.navigate(['/dashboard/services', jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).PartnerId]);
          }
        }
      }]);

      return ServiceCreateComponent;
    }();

    ServiceCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"]
      }];
    };

    ServiceCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/service-create/service-create.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service-create.component.scss */
      "./src/app/components/service-create/service-create.component.scss"))["default"]]
    })], ServiceCreateComponent);
    /***/
  },

  /***/
  "./src/app/components/service-edit/service-edit.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/service-edit/service-edit.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsServiceEditServiceEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZS1lZGl0L3NlcnZpY2UtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/service-edit/service-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/service-edit/service-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ServiceEditComponent */

  /***/
  function srcAppComponentsServiceEditServiceEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceEditComponent", function () {
      return ServiceEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/operations/operation.service */
    "./src/app/services/operations/operation.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var ServiceEditComponent = /*#__PURE__*/function () {
      function ServiceEditComponent(route, operationService, router, configuration) {
        var _this11 = this;

        _classCallCheck(this, ServiceEditComponent);

        this.route = route;
        this.operationService = operationService;
        this.router = router;
        this.configuration = configuration;
        this.partnerService = {};
        this.route.params.subscribe(function (params) {
          _this11.partnerId = params.partnerId;

          _this11.loadPartnerServiceById(_this11.partnerId);
        });
      }

      _createClass(ServiceEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadBusinessServices();
        }
      }, {
        key: "loadBusinessServices",
        value: function loadBusinessServices() {
          var _this12 = this;

          this.operationService.getBusinessServices().subscribe(function (data) {
            _this12.bussnessServices = data;
          }, function (error) {});
        }
      }, {
        key: "loadPartnerServiceById",
        value: function loadPartnerServiceById(id) {
          var _this13 = this;

          this.operationService.getPartnerServiceById(id).subscribe(function (data) {
            _this13.partnerService.price = data.price;
            _this13.partnerService.businessServiceId = data.serviceId;
            _this13.partnerService.seats = data.seats;
            _this13.partnerService.minDuration = data.minDuration;
            _this13.partnerService.imageData = data.imageData;
            _this13.partnerServiceId = data.id;
          }, function (error) {});
        }
      }, {
        key: "createPartnerService",
        value: function createPartnerService(form) {
          var _this14 = this;

          if (form.invalid) {
            return;
          } else {
            this.partnerService.partnerId = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).Role === '1' ? +localStorage.getItem('PartnerId') : jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).PartnerId;
            console.log(this.partnerService);
            this.operationService.updatePartnerService(this.partnerService, this.partnerServiceId).subscribe(function (data) {
              _this14.closeServiceEdit();
            }, function (error) {});
          }
        }
      }, {
        key: "closeServiceEdit",
        value: function closeServiceEdit() {
          if (jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).Role === '1') {
            this.router.navigate(['/dashboard/services', localStorage.getItem('PartnerId')]);
          } else {
            this.router.navigate(['/dashboard/services', jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).PartnerId]);
          }
        }
      }, {
        key: "changeToUploadImage",
        value: function changeToUploadImage() {
          this.isChangingImageService = true;
        }
      }, {
        key: "fileChange1",
        value: function fileChange1(event) {
          // tslint:disable-next-line:prefer-const
          var fileList = event.target.files;

          if (fileList.length > 0) {
            // tslint:disable-next-line:prefer-const
            var file = fileList[0];
            var licencFile = file.name.split('.');
            this.formData = new FormData();
            this.formData.append('ImageData', file, file.name);
            this.formData.append('PartnerServiceId', this.partnerServiceId);
          }
        }
      }, {
        key: "savePartnerServiceImage",
        value: function savePartnerServiceImage() {
          var _this15 = this;

          this.operationService.createPartnerServiceImage(this.formData).subscribe(function (data) {
            _this15.loadPartnerServiceById(_this15.partnerId);
          }, function (error) {});
        }
      }]);

      return ServiceEditComponent;
    }();

    ServiceEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"]
      }];
    };

    ServiceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/service-edit/service-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service-edit.component.scss */
      "./src/app/components/service-edit/service-edit.component.scss"))["default"]]
    })], ServiceEditComponent);
    /***/
  },

  /***/
  "./src/app/components/services/services.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/services/services.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsServicesServicesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".table-header {\n  display: flex;\n}\n.table-header .search_area {\n  flex: 1;\n}\n.table-header .placement {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9FOlxcQW5ndWxhclByb2plY3RcXGlob2hvLXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZXJ2aWNlc1xcc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLE9BQUE7QUNFUjtBREFJO0VBQ0ksT0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnNlYXJjaF9hcmVhe1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICAucGxhY2VtZW50e1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn0iLCIudGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWJsZS1oZWFkZXIgLnNlYXJjaF9hcmVhIHtcbiAgZmxleDogMTtcbn1cbi50YWJsZS1oZWFkZXIgLnBsYWNlbWVudCB7XG4gIGZsZXg6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/services/services.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/services/services.component.ts ***!
    \***********************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppComponentsServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/operations/operation.service */
    "./src/app/services/operations/operation.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent(operationService, route, router, configuration) {
        var _this16 = this;

        _classCallCheck(this, ServicesComponent);

        this.operationService = operationService;
        this.route = route;
        this.router = router;
        this.configuration = configuration;
        this.partnerServices = [];
        this.route.params.subscribe(function (params) {
          _this16.partnerId = params.partnerId;

          if (jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(_this16.configuration.JWT_Token)).Role === '1') {
            localStorage.setItem('PartnerId', _this16.partnerId);
          }

          _this16.loadPartnerService(_this16.partnerId);
        });
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadPartnerService",
        value: function loadPartnerService(partner) {
          var _this17 = this;

          this.operationService.getPartnerService(partner).subscribe(function (data) {
            _this17.partnerServices = data;
          }, function (error) {});
        }
      }, {
        key: "newPartnerService",
        value: function newPartnerService() {
          if (jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).Role === '1') {
            this.router.navigate(['/dashboard/service-create', localStorage.getItem('PartnerId')]);
          } else {
            this.router.navigate(['/dashboard/service-create', jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(this.configuration.JWT_Token)).PartnerId]);
          }
        }
      }, {
        key: "editPartnerService",
        value: function editPartnerService(parternerService) {
          console.log(parternerService.id);
          this.router.navigate(['/dashboard/service-edit', parternerService.id]);
        }
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_operations_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"]
      }];
    };

    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services/services.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.scss */
      "./src/app/components/services/services.component.scss"))["default"]]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_template_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/template/template.component */
    "./src/app/shared/template/template.component.ts");
    /* harmony import */


    var src_app_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var src_app_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/user-edit/user-edit.component */
    "./src/app/user-edit/user-edit.component.ts");
    /* harmony import */


    var src_app_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var src_app_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/partners/partners.component */
    "./src/app/components/partners/partners.component.ts");
    /* harmony import */


    var src_app_components_partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/partner-edit/partner-edit.component */
    "./src/app/components/partner-edit/partner-edit.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_components_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/components/services/services.component */
    "./src/app/components/services/services.component.ts");
    /* harmony import */


    var src_app_components_service_edit_service_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/components/service-edit/service-edit.component */
    "./src/app/components/service-edit/service-edit.component.ts");
    /* harmony import */


    var src_app_components_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/components/reservations/reservations.component */
    "./src/app/components/reservations/reservations.component.ts");
    /* harmony import */


    var src_app_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/pipes/search.pipe */
    "./src/app/pipes/search.pipe.ts");
    /* harmony import */


    var src_app_components_service_create_service_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/components/service-create/service-create.component */
    "./src/app/components/service-create/service-create.component.ts");
    /* harmony import */


    var src_app_components_barbers_barbers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/components/barbers/barbers.component */
    "./src/app/components/barbers/barbers.component.ts");
    /* harmony import */


    var src_app_components_barber_edit_barber_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/components/barber-edit/barber-edit.component */
    "./src/app/components/barber-edit/barber-edit.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [src_app_shared_template_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"], src_app_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], src_app_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], src_app_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], src_app_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_8__["PartnersComponent"], src_app_components_partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_9__["PartnerEditComponent"], src_app_components_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], src_app_components_service_edit_service_edit_component__WEBPACK_IMPORTED_MODULE_12__["ServiceEditComponent"], src_app_components_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_13__["ReservationsComponent"], src_app_components_service_create_service_create_component__WEBPACK_IMPORTED_MODULE_15__["ServiceCreateComponent"], src_app_components_barbers_barbers_component__WEBPACK_IMPORTED_MODULE_16__["BarbersComponent"], src_app_components_barber_edit_barber_edit_component__WEBPACK_IMPORTED_MODULE_17__["BarberEditComponent"], src_app_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: src_app_shared_template_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"],
        children: [{
          path: '',
          component: src_app_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]
        }, {
          path: 'user-list',
          component: src_app_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"]
        }, {
          path: 'user-edit',
          component: src_app_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"]
        }, {
          path: 'user-partners',
          component: src_app_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_8__["PartnersComponent"]
        }, {
          path: 'user-partner-edit',
          component: src_app_components_partner_edit_partner_edit_component__WEBPACK_IMPORTED_MODULE_9__["PartnerEditComponent"]
        }, {
          path: 'services/:partnerId',
          component: src_app_components_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"]
        }, {
          path: 'service-edit/:partnerId',
          component: src_app_components_service_edit_service_edit_component__WEBPACK_IMPORTED_MODULE_12__["ServiceEditComponent"]
        }, {
          path: 'service-create/:partenerId',
          component: src_app_components_service_create_service_create_component__WEBPACK_IMPORTED_MODULE_15__["ServiceCreateComponent"]
        }, {
          path: 'reservations',
          component: src_app_components_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_13__["ReservationsComponent"]
        }, {
          path: 'barbers',
          component: src_app_components_barbers_barbers_component__WEBPACK_IMPORTED_MODULE_16__["BarbersComponent"]
        }, {
          path: 'barber-edit',
          component: src_app_components_barber_edit_barber_edit_component__WEBPACK_IMPORTED_MODULE_17__["BarberEditComponent"]
        }]
      }])]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/pipes/search.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/search.pipe.ts ***!
    \**************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppPipesSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, filter) {
          // console.log(items + '  ' + filter);
          if (!items || !filter) {
            // console.log(items + '  ' + filter);
            return items;
          } // console.log(items + '  ' + filter);


          return items.filter(function (item) {
            return JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1;
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'genericfilter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/app/services/operations/operation.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/operations/operation.service.ts ***!
    \**********************************************************/

  /*! exports provided: OperationService */

  /***/
  function srcAppServicesOperationsOperationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationService", function () {
      return OperationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);

    var OperationService = /*#__PURE__*/function () {
      function OperationService(http, configuration, authService) {
        _classCallCheck(this, OperationService);

        this.http = http;
        this.configuration = configuration;
        this.authService = authService;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json;',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            // Authorization: this.authService.getToken(),
            Accept: 'q=0.8;application/json;q=0.9',
            'Access-Control-Max-Age': '600',
            'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
            Pragma: 'no-cache',
            Expires: '0'
          })
        };
        this.httpFormDataOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            // Authorization: this.authService.getToken(),
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
            'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
            Pragma: 'no-cache',
            Expires: '0'
          })
        };
        this.url = this.configuration.apiUrl;
      }

      _createClass(OperationService, [{
        key: "getReservationByPartnerId",
        value: function getReservationByPartnerId() {
          var user = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem(this.configuration.JWT_Token));
          return this.http.get(this.url + 'reservations/partner/' + user.PartnerId, this.httpOptions);
        }
      }, {
        key: "getReservations",
        value: function getReservations() {
          return this.http.get(this.url + 'reservations', this.httpOptions);
        }
      }, {
        key: "serveClient",
        value: function serveClient(reservationId) {
          var body = JSON.stringify('');
          return this.http.put(this.url + 'reservations/served/' + reservationId, body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
        }
      }, {
        key: "getBusinessServices",
        value: function getBusinessServices() {
          return this.http.get(this.url + 'businessServices', this.httpOptions);
        }
      }, {
        key: "getPartnerServiceById",
        value: function getPartnerServiceById(id) {
          return this.http.get(this.url + 'partnerServices/' + id, this.httpOptions);
        }
      }, {
        key: "getPartnerService",
        value: function getPartnerService(partnerId) {
          return this.http.get(this.url + 'partnerServices/partner/' + partnerId, this.httpOptions);
        }
      }, {
        key: "createPartnerService",
        value: function createPartnerService(partnerService) {
          var body = JSON.stringify(partnerService);
          return this.http.post(this.url + 'partnerServices', body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
        }
      }, {
        key: "updatePartnerService",
        value: function updatePartnerService(partnerService, serviceId) {
          var body = JSON.stringify(partnerService);
          return this.http.put(this.url + 'partnerServices/' + serviceId, body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
        }
      }, {
        key: "createPartnerServiceImage",
        value: function createPartnerServiceImage(partnerService) {
          // const body = JSON.stringify(partnerService);
          return this.http.put(this.url + 'partnerServices/uploadServiceImage', partnerService, this.httpFormDataOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
        }
      }, {
        key: "handleErrors",
        value: function handleErrors(error) {
          console.log(error);

          if (error.status > 0) {
            if (error.status > 0) {
              if (error.status === 401) {
                // return throwError('Unauthorized');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
              } else if (error.status === 500) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Please try again');
              } else if (error.status === 302) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Already have an open session.');
              } else if (error.status === 404) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
              } else {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error || 'Please try again');
              }
            }
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Check Connection and Try again');
          }
        }
      }]);

      return OperationService;
    }();

    OperationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    OperationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], OperationService);
    /***/
  },

  /***/
  "./src/app/shared/template/template.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/template/template.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedTemplateTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#menuswrp {\n  display: flex;\n  justify-content: flex-start;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 72px;\n  min-height: calc(98vh - 72px);\n}\n#menuswrp .inner-MobileMenu {\n  display: none;\n}\n#menuswrp .innerMenu {\n  order: 2;\n  width: 100%;\n}\n#menuswrp .innerMenu .menu {\n  padding: 8px 20px 0px;\n  display: none;\n  justify-content: flex-end;\n  width: 100%;\n  width: 100%;\n  height: 40px;\n  z-index: 9;\n  background-color: var(--sec-color);\n  border-left: 1px solid #49845c;\n}\n#menuswrp .innerMenu .menu ul {\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n#menuswrp .innerMenu .menu ul .menuline {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 120px;\n  height: 32px;\n  border-radius: 3px 3px 0px 0px;\n  background: #fff;\n  border: 1px solid #fff;\n  pointer-events: none;\n  transition: 0.3s ease-in-out;\n  color: var(--sec-color);\n}\n#menuswrp .innerMenu .menu ul .menuline:nth-child(1) {\n  transition: calc(0.3s * 1);\n}\n#menuswrp .innerMenu .menu ul .m-menu {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  z-index: 9;\n}\n#menuswrp .innerMenu .menu ul .m-menu li {\n  align-self: center;\n}\n#menuswrp .innerMenu .menu ul .m-menu li a {\n  padding: 8px 10px;\n  text-align: center;\n  display: block;\n  width: 120px;\n  color: #fff;\n  color: var(--accents);\n  font-family: \"Archivo\", sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n  outline: none;\n  text-decoration: none;\n  transition: all 300ms ease;\n}\n#menuswrp .innerMenu .menu ul .m-menu li a:focus {\n  color: var(--sec-color);\n}\n#menuswrp .innerMenu .menu ul .m-menu li:focus a, #menuswrp .innerMenu .menu ul .m-menu li:active {\n  color: var(--sec-color);\n}\n#menuswrp .verticalyMenu {\n  margin: 0px;\n  padding: 0px;\n  order: 1;\n  background-color: #002c0a;\n  background-color: #045029;\n  background-color: #033e20;\n  min-height: 100%;\n  z-index: 998;\n}\n#menuswrp .verticalyMenu .userprof {\n  width: 210px;\n  background-color: var(--sec-color);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n#menuswrp .verticalyMenu .userprof .profile {\n  display: block;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%;\n  position: relative;\n  background-color: #fff;\n  border: 2px solid rgba(255, 255, 255, 0.75);\n  margin-bottom: 10px;\n}\n#menuswrp .verticalyMenu .userprof .profile img {\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n#menuswrp .verticalyMenu .userprof h2 {\n  color: #fff;\n  font-family: \"Archivo\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 10px 0px 5px;\n}\n#menuswrp .verticalyMenu .userprof h4 {\n  color: #faf8f3;\n  font-family: \"Archivo\", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  padding: 0px;\n  opacity: 0.75;\n}\n#menuswrp .verticalyMenu .userprof .stats {\n  display: block;\n  width: 100%;\n  border-top: 1px solid #49845c;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 5px;\n  margin: 20px 0px 0px;\n}\n#menuswrp .verticalyMenu .userprof .stats .span {\n  display: block;\n  width: 1px;\n  min-height: 100%;\n  background-color: #49845c;\n  margin: 0px 5px;\n}\n#menuswrp .verticalyMenu .userprof .stats .icon {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: relative;\n  border-radius: 5px;\n  transition: all 300ms;\n}\n#menuswrp .verticalyMenu .userprof .stats .icon::before {\n  background-size: 100% auto;\n  content: \"\";\n  pointer-events: none;\n  height: 100%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 30px;\n}\n#menuswrp .verticalyMenu .userprof .stats .icon:hover {\n  background-color: var(--hover-mainl3);\n}\n#menuswrp .verticalyMenu .userprof .stats .icon:focus .noticn, #menuswrp .verticalyMenu .userprof .stats .icon:hover .noticn {\n  transform: scale(1.2);\n}\n#menuswrp .verticalyMenu .userprof .stats .icon .noticn {\n  position: absolute;\n  display: block;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background-color: #D9CB9E;\n  top: -4px;\n  right: -2px;\n  color: #002c0a;\n  font-family: \"Archivo\", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  text-align: center;\n  line-height: 18px;\n  transition: all 250ms;\n}\n#menuswrp .verticalyMenu .userprof .stats .prf::before {\n  background: url(\"/assets/usericon.svg\") no-repeat center center;\n  width: 26px;\n}\n#menuswrp .verticalyMenu .userprof .stats .mny::before {\n  background: url(\"/assets/icons/notificon.svg\") no-repeat center center;\n  height: 62%;\n}\n#menuswrp .verticalyMenu .userprof .stats .msg::before {\n  background: url(\"/assets/mailicon.svg\") no-repeat center center;\n}\n#menuswrp .verticalyMenu .mainMenu {\n  list-style: none;\n  color: #f8f8f86c;\n  background-color: #002c0a;\n  background-color: var(--hover-main);\n  width: 210px;\n  min-height: 100%;\n  padding: 0px;\n  margin: 0px;\n  z-index: 2;\n  position: relative;\n  transition: all 300ms;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item {\n  padding: 0px;\n  margin: 0px;\n  position: relative;\n  transition: all 300ms;\n  cursor: pointer;\n  display: block;\n  width: 210px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu {\n  display: block;\n  width: 100%;\n  color: #fff;\n  text-decoration: none !important;\n  text-align: left;\n  padding: 10px 12px;\n  transition: all 300ms;\n  font-size: 13px;\n  position: relative;\n  white-space: nowrap;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu svg {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  width: 11px;\n  height: 11px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu svg polyline {\n  fill: none;\n  stroke: #ffffff;\n  stroke-width: 12;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-miterlimit: 10;\n  transition: all 300ms;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown {\n  display: block;\n  background-color: var(--hover-mainl1);\n  position: absolute;\n  top: 0px;\n  left: 100%;\n  width: 210px;\n  padding: 0px;\n  margin: 0px;\n  z-index: -1;\n  transition: all 300ms;\n  opacity: 0;\n  pointer-events: none;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it {\n  display: block;\n  width: 100%;\n  height: 39px;\n  padding: 0px;\n  position: relative;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu {\n  display: block;\n  width: 100%;\n  color: #fff;\n  text-decoration: none !important;\n  text-align: left;\n  padding: 10px 12px;\n  transition: all 300ms;\n  font-size: 13px;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu:focus, #menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu:hover {\n  color: #D9CB9E !important;\n  border-radius: 3px 0px 0px 3px;\n  background-color: var(--hover-mainl2);\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu svg {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  width: 11px;\n  height: 11px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu svg polyline {\n  fill: none;\n  stroke: #ffffff;\n  stroke-width: 12;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-miterlimit: 10;\n  transition: all 300ms;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu-dropdown {\n  display: block;\n  background-color: var(--hover-mainl2);\n  position: absolute;\n  top: 0px;\n  left: 100%;\n  width: 210px;\n  padding: 0px;\n  margin: 0px;\n  z-index: -2;\n  transition: all 300ms;\n  opacity: 0;\n  pointer-events: none;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu-dropdown .sub-submenu-it {\n  display: block;\n  width: 100%;\n  height: 39px;\n  padding: 0px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu-dropdown .sub-submenu-it .sub-submenu {\n  display: block;\n  width: 100%;\n  color: #fff;\n  text-decoration: none !important;\n  text-align: left;\n  padding: 10px 12px;\n  transition: all 300ms;\n  font-size: 13px;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu-dropdown .sub-submenu-it .sub-submenu:focus, #menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu-dropdown .sub-submenu-it .sub-submenu:hover {\n  color: #D9CB9E !important;\n  border-radius: 3px 0px 0px 3px;\n  background-color: var(--hover-mainl3);\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu-dropdown .sub-submenu-it .sub-submenu svg {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  width: 11px;\n  height: 11px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it .submenu-dropdown .sub-submenu-it .sub-submenu svg polyline {\n  fill: none;\n  stroke: #ffffff;\n  stroke-width: 12;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-miterlimit: 10;\n  transition: all 300ms;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it:hover {\n  color: var(--accents);\n  background-color: var(--hover-mainl2);\n  border-radius: 0px 0px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it:hover .submenu svg polyline {\n  stroke: var(--accents);\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it:focus .submenu-dropdown, #menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it:hover .submenu-dropdown {\n  display: block;\n  left: 100%;\n  opacity: 1;\n  pointer-events: all;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it:focus > a, #menuswrp .verticalyMenu .mainMenu .mainmenu-item .menu-dropdown .submenu-it:hover > a {\n  color: var(--accents);\n  border-radius: 0px 0px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item:hover {\n  color: var(--accents);\n  background-color: var(--hover-mainl1);\n  border-radius: 0px 0px;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item:hover .menu svg polyline {\n  stroke: var(--accents);\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item:focus .menu-dropdown, #menuswrp .verticalyMenu .mainMenu .mainmenu-item:hover .menu-dropdown {\n  display: block;\n  left: 100%;\n  opacity: 1;\n  pointer-events: all;\n}\n#menuswrp .verticalyMenu .mainMenu .mainmenu-item:focus > a, #menuswrp .verticalyMenu .mainMenu .mainmenu-item:hover > a {\n  color: var(--accents);\n  border-radius: 0px 0px;\n}\n.chatscont {\n  padding: 20px;\n}\n.chatscont h2 {\n  color: var(--sec-color);\n  font-family: \"Archivo\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 10px 20px;\n  background-color: #faf8f3;\n  border-bottom: 1px solid #D9CB9E;\n  border-radius: 3px 3px 0px 0px;\n}\n.chatscont .form {\n  width: 100%;\n  margin-top: 0px;\n  padding: 40px 20px;\n  min-height: 100%;\n  background-color: #faf8f3;\n}\n.chatscont .form .chcon-wrp {\n  display: flex;\n  justify-content: space-between;\n}\n.chatscont .form .chcon-wrp .contactLIst {\n  width: 280px;\n  height: 100%;\n  background-color: #fff;\n  border: 1px solid #d1ddd6;\n  border-radius: 5px;\n  padding: 0px 5px;\n}\n.chatscont .form .chcon-wrp .contactLIst h4 {\n  color: var(--sec-color);\n  font-family: \"Archivo\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 14px 15px;\n  border-bottom: 1px solid #d1ddd6;\n}\n.chatscont .form .chcon-wrp .contactLIst ul {\n  list-style: none;\n  width: 100%;\n  padding-top: 10px;\n  margin-bottom: 14px;\n  max-height: 380px;\n  overflow: scroll;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li {\n  width: 100%;\n  padding: 8px 15px;\n  transition: all 300ms;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li .cont-dtail {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li .cont-dtail .contprof {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--main-color);\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  background-color: #49845c;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li .cont-dtail .contprof img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li .cont-dtail .contprof .noprofile {\n  display: block;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  line-height: 40px;\n  color: #fff;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li .cont-dtail .contnamsg {\n  display: block;\n  width: calc(100% - 40px);\n  height: 32px;\n  padding-left: 15px;\n  overflow: hidden;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li .cont-dtail .contnamsg h5 {\n  font-size: 14px;\n  font-weight: 400;\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n  line-height: 16px;\n  color: #2A2C2B;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li .cont-dtail .contnamsg p {\n  font-size: 12px;\n  font-weight: 400;\n  text-align: left;\n  color: rgba(42, 44, 43, 0.5);\n  padding: 0px;\n  margin: 0px;\n}\n.chatscont .form .chcon-wrp .contactLIst ul li:hover, .chatscont .form .chcon-wrp .contactLIst ul li:focus {\n  background-color: rgba(var(--main-color), 0.1);\n  border-radius: var(--rounding);\n}\n.chatscont .form .chcon-wrp .chatCont {\n  width: calc(100% - 280px);\n  height: 100%;\n  background-color: #fff;\n  border: 1px solid #d1ddd6;\n  border-radius: 5px;\n  padding: 0px 2px;\n  margin-left: 15px;\n  overflow: hidden;\n}\n.chatscont .form .chcon-wrp .chatCont h4 {\n  color: var(--sec-color);\n  font-family: \"Archivo\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 14px 15px;\n  border-bottom: 1px solid #d1ddd6;\n}\n.chatscont .form .chcon-wrp .chatCont .cont-dtail {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 15px;\n  border-bottom: 1px solid #d1ddd6;\n}\n.chatscont .form .chcon-wrp .chatCont .cont-dtail .contprof {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--main-color);\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  background-color: #49845c;\n}\n.chatscont .form .chcon-wrp .chatCont .cont-dtail .contprof img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.chatscont .form .chcon-wrp .chatCont .cont-dtail .contprof .noprofile {\n  display: block;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  line-height: 40px;\n  color: #fff;\n}\n.chatscont .form .chcon-wrp .chatCont .cont-dtail .contnamsg {\n  display: block;\n  width: calc(100% - 40px);\n  height: 32px;\n  padding-left: 15px;\n  overflow: hidden;\n}\n.chatscont .form .chcon-wrp .chatCont .cont-dtail .contnamsg h5 {\n  font-size: 14px;\n  font-weight: 400;\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n  line-height: 16px;\n  color: #2A2C2B;\n}\n.chatscont .form .chcon-wrp .chatCont .cont-dtail .contnamsg p {\n  font-size: 12px;\n  font-weight: 400;\n  text-align: left;\n  color: rgba(42, 44, 43, 0.5);\n  padding: 0px;\n  margin: 0px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont {\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  padding: 15px;\n  min-height: 325px;\n  max-height: 330px;\n  overflow: scroll;\n  background-color: rgba(42, 44, 43, 0.06);\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .sender-his {\n  display: flex;\n  justify-items: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .sender-his li {\n  display: block;\n  max-width: 70%;\n  background-color: #fff;\n  padding: 8px 12px 4px;\n  border-radius: 0px 8px 8px 8px;\n  margin-bottom: 3px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .sender-his li .text {\n  width: 100%;\n  margin-bottom: 4px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .sender-his li .text p {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  text-align: left;\n  color: rgba(42, 44, 43, 0.85);\n  padding: 0px;\n  margin: 0px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .sender-his li .timecnt {\n  display: block;\n  width: 100%;\n  font-size: 11px;\n  font-weight: 400;\n  text-align: right;\n  color: rgba(42, 44, 43, 0.5);\n  padding: 1px;\n  margin: 0px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .receiver-his {\n  display: flex;\n  justify-items: flex-start;\n  align-items: flex-end;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .receiver-his li {\n  display: block;\n  max-width: 70%;\n  background-color: #49845c;\n  padding: 8px 12px 4px;\n  border-radius: 8px 0px 8px 8px;\n  margin-bottom: 3px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .receiver-his li .text {\n  width: 100%;\n  margin-bottom: 4px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .receiver-his li .text p {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  text-align: left;\n  color: rgba(255, 255, 255, 0.85);\n  padding: 0px;\n  margin: 0px;\n}\n.chatscont .form .chcon-wrp .chatCont .msgCont .receiver-his li .timecnt {\n  display: block;\n  width: 100%;\n  font-size: 11px;\n  font-weight: 400;\n  text-align: right;\n  color: rgba(255, 255, 255, 0.5);\n  padding: 1px;\n  margin: 0px;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg {\n  width: 100%;\n  height: 50px;\n  background-color: #fff;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form {\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield {\n  padding: 5px 15px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield input {\n  width: 100%;\n  min-height: 100%;\n  padding: 0px 10px;\n  padding-right: 60px;\n  color: #000;\n  font-size: 13px;\n  font-weight: 400;\n  border-radius: var(--rounding);\n  border: 1px solid rgba(var(--main-color), 0.1);\n  transition: all 300ms ease;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield input::-webkit-input-placeholder {\n  color: #BDC3C7;\n  font-size: 12px;\n  font-weight: 500;\n  position: relative;\n  transform: translateY(0px);\n  transition: all 300ms ease;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield input::-moz-placeholder {\n  color: #BDC3C7;\n  font-size: 12px;\n  font-weight: 500;\n  position: relative;\n  transform: translateY(0px);\n  transition: all 300ms ease;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield input::-ms-input-placeholder {\n  color: #BDC3C7;\n  font-size: 12px;\n  font-weight: 500;\n  position: relative;\n  transform: translateY(0px);\n  transition: all 300ms ease;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield input::placeholder {\n  color: #BDC3C7;\n  font-size: 12px;\n  font-weight: 500;\n  position: relative;\n  transform: translateY(0px);\n  transition: all 300ms ease;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield input:focus {\n  border: 1px solid rgba(var(--main-color), 0.45);\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield .sendbtn {\n  display: block;\n  width: 60px;\n  height: 38px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background-color: #fff;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield .sendbtn img {\n  width: 24px;\n  margin: 0px auto;\n}\n.chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield .sendbtn:hover, .chatscont .form .chcon-wrp .chatCont .wrtmsg form .textfield .sendbtn:focus {\n  background-color: rgba(var(--main-color), 0.1);\n}\n@media only screen and (min-width: 480px) and (max-width: 960px) {\n  #menuswrp {\n    margin-top: 56px;\n    min-height: calc(98vh - 56px);\n  }\n  #menuswrp .verticalyMenu {\n    display: none;\n  }\n  #menuswrp .menu {\n    display: none !important;\n  }\n\n  .inner-MobileMenu {\n    display: block;\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    padding: 8px 10px 8px;\n    z-index: 1040;\n    background-color: var(--sec-color);\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);\n  }\n  .inner-MobileMenu .mobilemenu {\n    width: 100%;\n    height: 50px;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .item-mnu {\n    display: block;\n    min-width: calc((100vw - 40px) / 5);\n    height: 100%;\n    position: relative;\n    border-radius: 5px;\n    transition: all 300ms;\n    margin: 0px 2px;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .item-mnu::before {\n    background-size: 100% auto;\n    content: \"\";\n    pointer-events: none;\n    height: 100%;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    width: 30px;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .item-mnu:hover, .inner-MobileMenu .mobilemenu .m-menu .item-mnu:focus {\n    background-color: #49845c;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .homicon::before {\n    background: url(\"/assets/homicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .identicon::before {\n    background: url(\"/assets/identicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .gurdicon::before {\n    background: url(\"/assets/guardicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .docicon::before {\n    background: url(\"/assets/docicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .contricon::before {\n    background: url(\"/assets/contricon.svg\") no-repeat center center;\n    width: 45%;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  #menuswrp {\n    display: flex;\n    justify-content: flex-start;\n    padding: 0px;\n    margin: 0px;\n    margin-top: 56px;\n    min-height: calc(98vh - 56px);\n  }\n  #menuswrp .verticalyMenu {\n    display: none;\n  }\n  #menuswrp .menu {\n    display: none !important;\n  }\n\n  .inner-MobileMenu {\n    display: block;\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    padding: 8px 10px 8px;\n    z-index: 1040;\n    background-color: var(--sec-color);\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);\n  }\n  .inner-MobileMenu .mobilemenu {\n    width: 100%;\n    height: 40px;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .item-mnu {\n    display: block;\n    min-width: calc((100vw - 40px) / 5);\n    height: 100%;\n    position: relative;\n    border-radius: 5px;\n    transition: all 300ms;\n    margin: 0px 2px;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .item-mnu::before {\n    background-size: 100% auto;\n    content: \"\";\n    pointer-events: none;\n    height: 100%;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    width: 30px;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .item-mnu:hover, .inner-MobileMenu .mobilemenu .m-menu .item-mnu:focus {\n    background-color: #49845c;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .homicon::before {\n    background: url(\"/assets/homicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .identicon::before {\n    background: url(\"/assets/identicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .gurdicon::before {\n    background: url(\"/assets/guardicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .docicon::before {\n    background: url(\"/assets/docicon.svg\") no-repeat center center;\n    width: 45%;\n  }\n  .inner-MobileMenu .mobilemenu .m-menu .contricon::before {\n    background: url(\"/assets/contricon.svg\") no-repeat center center;\n    width: 45%;\n  }\n}\n#menuswrp {\n  display: flex;\n  justify-content: flex-start;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 72px;\n  min-height: calc(98vh - 72px);\n}\n#menuswrp .inner-MobileMenu {\n  display: none;\n}\n#menuswrp .innerMenu {\n  order: 2;\n  width: 100%;\n}\n#menuswrp .innerMenu .menu {\n  padding: 8px 20px 0px;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  width: 100%;\n  height: 40px;\n  z-index: 9;\n  background-color: #1B5732;\n  border-left: 1px solid #49845c;\n}\n#menuswrp .innerMenu .menu ul {\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n#menuswrp .innerMenu .menu ul .menuline {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 120px;\n  height: 32px;\n  border-radius: 3px 3px 0px 0px;\n  background: #fff;\n  border: 1px solid #fff;\n  pointer-events: none;\n  transition: 0.3s ease-in-out;\n  color: #1B5732;\n}\n#menuswrp .innerMenu .menu ul .menuline:nth-child(1) {\n  transition: calc(0.3s * 1);\n}\n#menuswrp .innerMenu .menu ul .m-menu {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  z-index: 9;\n}\n#menuswrp .innerMenu .menu ul .m-menu li {\n  align-self: center;\n}\n#menuswrp .innerMenu .menu ul .m-menu li a {\n  padding: 8px 10px;\n  text-align: center;\n  display: block;\n  width: 120px;\n  color: #fff;\n  color: #D9CB9E;\n  font-family: \"Archivo\", sans-serif;\n  font-size: 11px;\n  font-weight: 400;\n  outline: none;\n  text-decoration: none;\n  transition: all 300ms ease;\n}\n#menuswrp .innerMenu .menu ul .m-menu li a:focus {\n  color: #1B5732;\n}\n#menuswrp .innerMenu .menu ul .m-menu li:focus a, #menuswrp .innerMenu .menu ul .m-menu li:active {\n  color: #1B5732;\n}\n.dropdown-item {\n  cursor: pointer;\n}\n.dropdown-item:hover {\n  cursor: pointer;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RlbXBsYXRlL0U6XFxBbmd1bGFyUHJvamVjdFxcaWhvaG8tdWkvc3JjXFxhcHBcXHNoYXJlZFxcdGVtcGxhdGVcXHRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDbkJKO0FEcUJJO0VBQ0ksYUFBQTtBQ25CUjtBRHFCSTtFQUNJLFFBQUE7RUFFQSxXQUFBO0FDcEJSO0FENkJRO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQzNCWjtBRDRCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUMzQmhCO0FENkJnQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBRUEsb0JBQUE7RUFFQSw0QkFBQTtFQUVBLHVCQUFBO0FDL0JwQjtBRGdDb0I7RUFDSSwwQkFBQTtBQzlCeEI7QURvQ2dCO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2xDcEI7QURtQ29CO0VBQ0ksa0JBQUE7QUNqQ3hCO0FEbUN3QjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBSUEsMEJBQUE7QUNyQzVCO0FEdUM0QjtFQUdJLHVCQUFBO0FDdkNoQztBRDJDd0I7RUFFSSx1QkFBQTtBQzFDNUI7QURtREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7QUNuRFI7QURvRFE7RUFDSSxZQUFBO0VBRUEsa0NBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ25EWjtBRG9EWTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ2xEaEI7QURtRGdCO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ2pEbkI7QURvRFk7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ25EaEI7QURxRFk7RUFDSSxjQTFLTDtFQTJLSyxrQ0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDcERoQjtBRHNEWTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDckRoQjtBRHNEZ0I7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDcERwQjtBRHNEZ0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGtCQUFBO0VBQ0EscUJBQUE7QUN0RHBCO0FEdURvQjtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNyRHhCO0FEdURvQjtFQUNJLHFDQUFBO0FDckR4QjtBRHVEb0I7RUFFSSxxQkFBQTtBQ3REeEI7QUR3RG9CO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUN0RHhCO0FEMERvQjtFQUNBLCtEQUFBO0VBQ0EsV0FBQTtBQ3hEcEI7QUQ0RG9CO0VBQ0Esc0VBQUE7RUFDQSxXQUFBO0FDMURwQjtBRDhEb0I7RUFDQSwrREFBQTtBQzVEcEI7QURpRVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7QUNoRVo7QURxRVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNwRWhCO0FEcUVnQjtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNuRXBCO0FEaUZvQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDL0V4QjtBRGdGd0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUM5RTVCO0FEa0ZnQjtFQUNJLGNBQUE7RUFFQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNsRnBCO0FEcUZvQjtFQUdJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ3RGeEI7QUR1RndCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNyRjVCO0FEdUY0QjtFQUVJLHlCQUFBO0VBQ0EsOEJBQUE7RUFFQSxxQ0FBQTtBQ3ZGaEM7QUR5RjRCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN2RmhDO0FEd0ZnQztFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ3RGcEM7QUQwRndCO0VBQ0ksY0FBQTtFQUdBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQzFGNUI7QUQyRjRCO0VBR0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzNGaEM7QUQ2RmdDO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUMzRnBDO0FENkZvQztFQUVJLHlCQUFBO0VBQ0EsOEJBQUE7RUFFQSxxQ0FBQTtBQzdGeEM7QUQrRm9DO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM3RnhDO0FEOEZ3QztFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQzVGNUM7QURrR3dCO0VBQ0kscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0FDaEc1QjtBRG1Hb0M7RUFDSSxzQkFBQTtBQ2pHeEM7QURzR3dCO0VBRUksY0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNyRzVCO0FEdUd3QjtFQUVJLHFCQUFBO0VBQ0Esc0JBQUE7QUN0RzVCO0FEMEdnQjtFQUNJLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQ3hHcEI7QUQyRzRCO0VBQ0ksc0JBQUE7QUN6R2hDO0FEOEdnQjtFQUVJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDN0dwQjtBRCtHZ0I7RUFFSSxxQkFBQTtFQUNBLHNCQUFBO0FDOUdwQjtBRDRIQTtFQUNJLGFBQUE7QUN6SEo7QUQwSEk7RUFDSSx1QkFBQTtFQUNBLGtDQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkE1Z0JHO0VBNmdCSCxnQ0FBQTtFQUNBLDhCQUFBO0FDekhSO0FEMkhJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBcmhCRztBQzRaWDtBRDBIUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ3hIWjtBRHlIWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2SGhCO0FEd0hnQjtFQUNJLHVCQUFBO0VBQ0Esa0NBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdDQUFBO0FDeEhwQjtBRDBIZ0I7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3hIcEI7QUQwSG9CO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUN4SHhCO0FEeUh3QjtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDdkg1QjtBRHdINEI7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDdEhoQztBRHVIZ0M7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FDckhwQztBRHVIZ0M7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3JIcEM7QUR3SDRCO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN0SGhDO0FEdUhnQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBMW1CMUI7QUNxZlY7QUR1SGdDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDckhwQztBRHlId0I7RUFFSSw4Q0FBQTtFQUNBLDhCQUFBO0FDeEg1QjtBRDZIWTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzNIaEI7QUQ0SGdCO0VBQ0ksdUJBQUE7RUFDQSxrQ0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0NBQUE7QUM1SHBCO0FEOEhnQjtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDNUhwQjtBRDZIb0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDM0h4QjtBRDRId0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FDMUg1QjtBRDRId0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQzFINUI7QUQ2SG9CO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUMzSHhCO0FENEh3QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBbnNCbEI7QUN5a0JWO0FENEh3QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzFINUI7QURnSWdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUMvSHBCO0FEZ0lvQjtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUM5SHhCO0FEK0h3QjtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUM3SDVCO0FEOEg0QjtFQUNJLFdBQUE7RUFFQSxrQkFBQTtBQzdIaEM7QUQ4SGdDO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM1SHBDO0FEK0g0QjtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDN0hoQztBRGlJb0I7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDL0h4QjtBRGdJd0I7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDOUg1QjtBRCtINEI7RUFDSSxXQUFBO0VBRUEsa0JBQUE7QUM5SGhDO0FEK0hnQztFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDN0hwQztBRGdJNEI7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzlIaEM7QURzSWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ3BJcEI7QURxSW9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25JeEI7QURvSXdCO0VBSUksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNySTVCO0FEc0k0QjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4Q0FBQTtFQUVBLDBCQUFBO0FDckloQztBRHNJZ0M7RUFDSSxjQTcwQnpCO0VBODBCeUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDcElwQztBRDhIZ0M7RUFDSSxjQTcwQnpCO0VBODBCeUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDcElwQztBRDhIZ0M7RUFDSSxjQTcwQnpCO0VBODBCeUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDcElwQztBRDhIZ0M7RUFDSSxjQTcwQnpCO0VBODBCeUIsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDcElwQztBRHVJZ0M7RUFFSSwrQ0FBQTtBQ3RJcEM7QUQwSTRCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDeEloQztBRHlJZ0M7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUN2SXBDO0FEeUlnQztFQUNJLDhDQUFBO0FDdklwQztBRHNVQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSw2QkFBQTtFQ25VTjtFRG9VTTtJQUNJLGFBQUE7RUNsVVY7RURxVU07SUFDSSx3QkFBQTtFQ25VVjs7RURzVUU7SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLGtDQUFBO0lBSUEsK0NBQUE7RUNwVU47RURxVU07SUFJSSxXQUFBO0lBQ0EsWUFBQTtFQ3RVVjtFRHVVVTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDclVkO0VEc1VjO0lBQ0ksY0FBQTtJQUNBLG1DQUFBO0lBRUEsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUVBLGVBQUE7RUN0VWxCO0VEdVVrQjtJQUNJLDBCQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNyVXRCO0VEdVVrQjtJQUVJLHlCQUFBO0VDdFV0QjtFRDBVa0I7SUFDQSw4REFBQTtJQUNBLFVBQUE7RUN4VWxCO0VENFVrQjtJQUNBLGdFQUFBO0lBQ0EsVUFBQTtFQzFVbEI7RUQ4VWtCO0lBQ0EsZ0VBQUE7SUFDQSxVQUFBO0VDNVVsQjtFRGdWa0I7SUFDQSw4REFBQTtJQUNBLFVBQUE7RUM5VWxCO0VEa1ZrQjtJQUNBLGdFQUFBO0lBQ0EsVUFBQTtFQ2hWbEI7QUFDRjtBRHNWQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLDJCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VDcFZOO0VEcVZNO0lBQ0ksYUFBQTtFQ25WVjtFRHFWTTtJQUNJLHdCQUFBO0VDblZWOztFRHNWRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0NBQUE7SUFJQSwrQ0FBQTtFQ3BWTjtFRHFWTTtJQUlJLFdBQUE7SUFDQSxZQUFBO0VDdFZWO0VEdVZVO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNyVmQ7RURzVmM7SUFDSSxjQUFBO0lBQ0EsbUNBQUE7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBRUEsZUFBQTtFQ3RWbEI7RUR1VmtCO0lBQ0ksMEJBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ3JWdEI7RUR1VmtCO0lBRUkseUJBQUE7RUN0VnRCO0VEMFZrQjtJQUNBLDhEQUFBO0lBQ0EsVUFBQTtFQ3hWbEI7RUQ0VmtCO0lBQ0EsZ0VBQUE7SUFDQSxVQUFBO0VDMVZsQjtFRDhWa0I7SUFDQSxnRUFBQTtJQUNBLFVBQUE7RUM1VmxCO0VEZ1drQjtJQUNBLDhEQUFBO0lBQ0EsVUFBQTtFQzlWbEI7RURrV2tCO0lBQ0EsZ0VBQUE7SUFDQSxVQUFBO0VDaFdsQjtBQUNGO0FEb1lBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDbFlKO0FEb1lJO0VBQ0ksYUFBQTtBQ2xZUjtBRG9ZSTtFQUNJLFFBQUE7RUFFQSxXQUFBO0FDbllSO0FENFlRO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBbnlDRDtFQW95Q0MsOEJBQUE7QUMxWVo7QUQyWVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDMVloQjtBRDRZZ0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUVBLG9CQUFBO0VBRUEsNEJBQUE7RUFFQSxjQTV6Q1Q7QUM4NkJYO0FEK1lvQjtFQUNJLDBCQUFBO0FDN1l4QjtBRG1aZ0I7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDalpwQjtBRGtab0I7RUFDSSxrQkFBQTtBQ2haeEI7QURrWndCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBeDFDbkI7RUF5MUNtQixrQ0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUlBLDBCQUFBO0FDcFo1QjtBRHNaNEI7RUFHSSxjQW4yQ3JCO0FDNjhCWDtBRDBad0I7RUFFSSxjQXoyQ2pCO0FDZzlCWDtBRHNhQTtFQUNJLGVBQUE7QUNuYUo7QURxYUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ2xhSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICArKysrKysgY29sb3JzICsrKytcclxuXHJcblxyXG4kbG5nLXRleHQ6IzJBMkMyQjtcclxuJGNwdC10ZXh0OiAjQkRDM0M3O1xyXG5cclxuJGFjY2VudHM6I0Q5Q0I5RTtcclxuJGFjY2VudHMtbDojZmFmOGYzO1xyXG4kYWNjZW50cy1kOiNEOUNCOUU7XHJcblxyXG4kc2VjLWNvbG9yOiMxQjU3MzI7XHJcbiRzZWMtY29sb3ItbDojNDk4NDVjO1xyXG4kc2VjLWNvbG9yLWQ6IzAwMmMwYTtcclxuXHJcbkBtaXhpbiBvdmVyKCkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDlweCAxMHB4IC01cHggcmdiYSgyNywgODcsIDUwLDAuMjUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggOXB4IDEwcHggLTVweCByZ2JhKDI3LCA4NywgNTAsMC4yNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOXB4IDEwcHggLTVweCByZ2JhKDI3LCA4NywgNTAsMC4yNSk7XHJcbn1cclxuI21lbnVzd3Jwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzJweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTh2aCAtIDcycHgpO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmlubmVyLU1vYmlsZU1lbnV7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLmlubmVyTWVudXtcclxuICAgICAgICBvcmRlcjoyO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC8vIHotaW5kZXg6IDk7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgODcsIDUwLC41KTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xyXG4gICAgICAgIC8vIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQ5ODQ1YztcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnRzKTtcclxuICAgICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDBweDtcclxuICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHggMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDk4NDVjO1xyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAubWVudWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzQ5ODM1YjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNhbGMoMC4zcyAqIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IGNhbGMoMC41cyAqIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tLW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IzgzYzQ1NSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU5ODM1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMgYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC52ZXJ0aWNhbHlNZW51e1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJjMGE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0NTAyOTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMzZTIwO1xyXG4gICAgICAgIC8vIHdpZHRoOiAyMTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5ODtcclxuICAgICAgICAudXNlcnByb2Z7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnByb2ZpbGV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl2bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50cy1sO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIC8vIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdGF0c3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ5ODQ1YztcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDk4NDVjO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIC5zcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjFweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODQ1YztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbmwzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyAubm90aWNuLFxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIgLm5vdGljbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubm90aWNue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUNCOUU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAyYzBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyY2hpdm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJme1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvdXNlcmljb24uc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1ueXtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ljb25zL25vdGlmaWNvbi5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubXNne1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvbWFpbGljb24uc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluTWVudXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmOGY4Zjg2YztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmMwYTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgICAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIC8vICY6aG92ZXIsICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAzcHggMHB4IDBweCAzcHg7XHJcbiAgICAgICAgICAgIC5tYWlubWVudS1pdGVte1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9tb3JlYXJyb3cuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1zaXplOiAxMXB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDVweCB0b3AgOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWxpbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6I2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDoxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwOnJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOnJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudS1kcm9wZG93bntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdmVyZmxvdy1YOiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbmwxKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjEwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDBweCAzcHggM3B4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAuc3VibWVudS1pdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3VibWVudXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRhY2NlbnRzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDBweCAwcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM0OTg0NWMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1tYWlubDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seWxpbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDoxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6cm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbjpyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1Ym1lbnUtZHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93LVg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1tYWlubDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWItc3VibWVudS1pdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWItc3VibWVudXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRhY2NlbnRzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMHB4IDBweCAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk4NDVjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1tYWlubDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seWxpbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTojZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDoxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcDpyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46cm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1tYWlubDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJtZW51e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seWxpbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6dmFyKC0tYWNjZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyAuc3VibWVudS1kcm9wZG93bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciAuc3VibWVudS1kcm9wZG93bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMgPiBhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyID4gYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1tYWlubDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlsaW5le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTp2YXIoLS1hY2NlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Zm9jdXMgLm1lbnUtZHJvcGRvd24sXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIC5tZW51LWRyb3Bkb3due1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyA+IGEsXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyID4gYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jaGF0c2NvbnR7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDtcclxuICAgIGgye1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl2bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudHMtbDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGFjY2VudHM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm17XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRzLWw7XHJcbiAgICAgICAgLmNoY29uLXdycHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAuY29udGFjdExJc3R7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QxZGRkNjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggO1xyXG4gICAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50cy1sO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZGQ2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4ICAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250LWR0YWlse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udHByb2Z7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk4NDVjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vcHJvZmlsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250bmFtc2d7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxuZy10ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRsbmctdGV4dCwgLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tYWluLWNvbG9yKSwgLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jaGF0Q29udHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODBweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QxZGRkNjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAycHggO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50cy1sO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZGQ2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnQtZHRhaWx7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHggO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZGQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250cHJvZntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODQ1YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vcHJvZmlsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250bmFtc2d7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsbmctdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgkbG5nLXRleHQsIC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAubXNnQ29udHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4IDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGxuZy10ZXh0LCAuMDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kZXItaGlze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHggNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDhweCA4cHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgkbG5nLXRleHQsIC44NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVjbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoJGxuZy10ZXh0LCAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZWNlaXZlci1oaXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk4NDVjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHggNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDBweCA4cHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgjZmZmLCAuODUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lY250e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCNmZmYsIC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAud3J0bXNne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0ZmllbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tbWFpbi1jb2xvciksIC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzBhOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjokY3B0LXRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tbWFpbi1jb2xvciksIC40NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmRidG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLW1haW4tY29sb3IpLCAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo2NDBweCl7XHJcbi8vICAgICAjd2VsY29tZS1tZW51e1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vICAgICAjd2VsY29tZW1vYi1tZW51e1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgICAgICB0b3A6IDBweDtcclxuLy8gICAgICAgICBsZWZ0OiAwcHg7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICB6LWluZGV4OiA5OTk7XHJcbi8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgICAgICAubW9iaWxlLW1lbnV7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAubWVudS10b3B0YWJ7XHJcbi8vICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgXHJcbi8vICAgICAgICAgICAgICAgICAubG9nb3dyYXBwZXJ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC5tZW5pY29ud3JhcHBlcntcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGltZ3tcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5tb2JpbGUtbWVudXdycHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuLy8gICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuLy8gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbi8vICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgICAgICAgICAubW9iaWxlLW1lbnVjb250e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuLy8gICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDMwO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC51c2VycHJve1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9maWxle1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6NTAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGgye1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyY2hpdm8nLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB1bHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGl7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMThweCAxMHB4IDI1cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzQ5ODM1YjtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDNweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ob21laWNue1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9ob21pY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWxwaWNue1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2hlbHBpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dpbmljbntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9sb2dpbmljb24uc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZ251cGljbntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zaWdudXBpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIgYSwgJjpmb2N1cyBhe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudHMpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5tYm1udXNlcHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokYWNjZW50cztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KXtcclxuICAgICNtZW51c3dycHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTh2aCAtIDU2cHgpO1xyXG4gICAgICAgIC52ZXJ0aWNhbHlNZW51e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXItTW9iaWxlTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweDtcclxuICAgICAgICB6LWluZGV4OiAxMDQwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XHJcblxyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAubW9iaWxlbWVudXtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIC5tLW1lbnV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAuaXRlbS1tbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBjYWxjKCgxMDB2dyAtIDQwcHgpIC8gNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0NCwgNDMsIDAuMjE5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRhY2NlbnRzLWQsIC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODQ1YztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaG9taWNvbntcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2hvbWljb24uc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWRlbnRpY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaWRlbnRpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmd1cmRpY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvZ3VhcmRpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRvY2ljb257XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9kb2NpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRyaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2NvbnRyaWNvbi5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzIwcHgpIGFuZCAobWF4LXdpZHRoOjY0MHB4KXtcclxuICAgICNtZW51c3dycHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDk4dmggLSA1NnB4KTtcclxuICAgICAgICAudmVydGljYWx5TWVudXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXItTW9iaWxlTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweDtcclxuICAgICAgICB6LWluZGV4OiAxMDQwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XHJcblxyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAubW9iaWxlbWVudXtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIC5tLW1lbnV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAuaXRlbS1tbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBjYWxjKCgxMDB2dyAtIDQwcHgpIC8gNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA0NCwgNDMsIDAuMjE5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRhY2NlbnRzLWQsIC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODQ1YztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaG9taWNvbntcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2hvbWljb24uc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWRlbnRpY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaWRlbnRpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmd1cmRpY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvZ3VhcmRpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRvY2ljb257XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9kb2NpY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRyaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2NvbnRyaWNvbi5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4jbWVudXN3cnB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYyg5OHZoIC0gNzJweCk7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAuaW5uZXItTW9iaWxlTWVudXtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW5uZXJNZW51e1xyXG4gICAgICAgIG9yZGVyOjI7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLy8gei1pbmRleDogOTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCA4NywgNTAsLjUpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWMtY29sb3I7XHJcbiAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkc2VjLWNvbG9yLWw7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudHM7XHJcbiAgICAgICAgLy8gcGFkZGluZzogOHB4IDBweCAwcHg7XHJcbiAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4IDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWMtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHNlYy1jb2xvci1sO1xyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAubWVudWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzQ5ODM1YjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlYy1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNhbGMoMC4zcyAqIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IGNhbGMoMC41cyAqIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tLW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRhY2NlbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IzgzYzQ1NSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU5ODM1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2VjLWNvbG9yOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMgYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlYy1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uZHJvcGRvd24taXRlbXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24taXRlbTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiIsIiNtZW51c3dycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogNzJweDtcbiAgbWluLWhlaWdodDogY2FsYyg5OHZoIC0gNzJweCk7XG59XG4jbWVudXN3cnAgLmlubmVyLU1vYmlsZU1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuI21lbnVzd3JwIC5pbm5lck1lbnUge1xuICBvcmRlcjogMjtcbiAgd2lkdGg6IDEwMCU7XG59XG4jbWVudXN3cnAgLmlubmVyTWVudSAubWVudSB7XG4gIHBhZGRpbmc6IDhweCAyMHB4IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQ5ODQ1Yztcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI21lbnVzd3JwIC5pbm5lck1lbnUgLm1lbnUgdWwgLm1lbnVsaW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHVsIC5tZW51bGluZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2l0aW9uOiBjYWxjKDAuM3MgKiAxKTtcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHVsIC5tLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHVsIC5tLW1lbnUgbGkge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jbWVudXN3cnAgLmlubmVyTWVudSAubWVudSB1bCAubS1tZW51IGxpIGEge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWFjY2VudHMpO1xuICBmb250LWZhbWlseTogXCJBcmNoaXZvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHVsIC5tLW1lbnUgbGkgYTpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xufVxuI21lbnVzd3JwIC5pbm5lck1lbnUgLm1lbnUgdWwgLm0tbWVudSBsaTpmb2N1cyBhLCAjbWVudXN3cnAgLmlubmVyTWVudSAubWVudSB1bCAubS1tZW51IGxpOmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3JkZXI6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJjMGE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDUwMjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzNlMjA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5ODtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAudXNlcnByb2Yge1xuICB3aWR0aDogMjEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLnVzZXJwcm9mIC5wcm9maWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiAucHJvZmlsZSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJBcmNoaXZvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweCAwcHggNXB4O1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiBoNCB7XG4gIGNvbG9yOiAjZmFmOGYzO1xuICBmb250LWZhbWlseTogXCJBcmNoaXZvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMHB4O1xuICBvcGFjaXR5OiAwLjc1O1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiAuc3RhdHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDk4NDVjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCA1cHg7XG4gIG1hcmdpbjogMjBweCAwcHggMHB4O1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiAuc3RhdHMgLnNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODQ1YztcbiAgbWFyZ2luOiAwcHggNXB4O1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiAuc3RhdHMgLmljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAudXNlcnByb2YgLnN0YXRzIC5pY29uOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLnVzZXJwcm9mIC5zdGF0cyAuaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW1haW5sMyk7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLnVzZXJwcm9mIC5zdGF0cyAuaWNvbjpmb2N1cyAubm90aWNuLCAjbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLnVzZXJwcm9mIC5zdGF0cyAuaWNvbjpob3ZlciAubm90aWNuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiAuc3RhdHMgLmljb24gLm5vdGljbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5Q0I5RTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogLTJweDtcbiAgY29sb3I6ICMwMDJjMGE7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLnVzZXJwcm9mIC5zdGF0cyAucHJmOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3VzZXJpY29uLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDI2cHg7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLnVzZXJwcm9mIC5zdGF0cyAubW55OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL25vdGlmaWNvbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogNjIlO1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC51c2VycHJvZiAuc3RhdHMgLm1zZzo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9tYWlsaWNvbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICNmOGY4Zjg2YztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmMwYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbik7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMTBweDtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC5tYWluTWVudSAubWFpbm1lbnUtaXRlbSAubWVudSBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51IHN2ZyBwb2x5bGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogI2ZmZmZmZjtcbiAgc3Ryb2tlLXdpZHRoOiAxMjtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbmwxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMTAwJTtcbiAgd2lkdGg6IDIxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzlweDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51LWRyb3Bkb3duIC5zdWJtZW51LWl0IC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC5tYWluTWVudSAubWFpbm1lbnUtaXRlbSAubWVudS1kcm9wZG93biAuc3VibWVudS1pdCAuc3VibWVudTpmb2N1cywgI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC5tYWluTWVudSAubWFpbm1lbnUtaXRlbSAubWVudS1kcm9wZG93biAuc3VibWVudS1pdCAuc3VibWVudTpob3ZlciB7XG4gIGNvbG9yOiAjRDlDQjlFICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbmwyKTtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQgLnN1Ym1lbnUgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDhweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC5tYWluTWVudSAubWFpbm1lbnUtaXRlbSAubWVudS1kcm9wZG93biAuc3VibWVudS1pdCAuc3VibWVudSBzdmcgcG9seWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNmZmZmZmY7XG4gIHN0cm9rZS13aWR0aDogMTI7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51LWRyb3Bkb3duIC5zdWJtZW51LWl0IC5zdWJtZW51LWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW1haW5sMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDEwMCU7XG4gIHdpZHRoOiAyMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgei1pbmRleDogLTI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51LWRyb3Bkb3duIC5zdWJtZW51LWl0IC5zdWJtZW51LWRyb3Bkb3duIC5zdWItc3VibWVudS1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51LWRyb3Bkb3duIC5zdWJtZW51LWl0IC5zdWJtZW51LWRyb3Bkb3duIC5zdWItc3VibWVudS1pdCAuc3ViLXN1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51LWRyb3Bkb3duIC5zdWJtZW51LWl0IC5zdWJtZW51LWRyb3Bkb3duIC5zdWItc3VibWVudS1pdCAuc3ViLXN1Ym1lbnU6Zm9jdXMsICNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQgLnN1Ym1lbnUtZHJvcGRvd24gLnN1Yi1zdWJtZW51LWl0IC5zdWItc3VibWVudTpob3ZlciB7XG4gIGNvbG9yOiAjRDlDQjlFICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbmwzKTtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQgLnN1Ym1lbnUtZHJvcGRvd24gLnN1Yi1zdWJtZW51LWl0IC5zdWItc3VibWVudSBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51LWRyb3Bkb3duIC5zdWJtZW51LWl0IC5zdWJtZW51LWRyb3Bkb3duIC5zdWItc3VibWVudS1pdCAuc3ViLXN1Ym1lbnUgc3ZnIHBvbHlsaW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjZmZmZmZmO1xuICBzdHJva2Utd2lkdGg6IDEyO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC5tYWluTWVudSAubWFpbm1lbnUtaXRlbSAubWVudS1kcm9wZG93biAuc3VibWVudS1pdDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnRzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbWFpbmwyKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweDtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQ6aG92ZXIgLnN1Ym1lbnUgc3ZnIHBvbHlsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1hY2NlbnRzKTtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQ6Zm9jdXMgLnN1Ym1lbnUtZHJvcGRvd24sICNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQ6aG92ZXIgLnN1Ym1lbnUtZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW0gLm1lbnUtZHJvcGRvd24gLnN1Ym1lbnUtaXQ6Zm9jdXMgPiBhLCAjbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtIC5tZW51LWRyb3Bkb3duIC5zdWJtZW51LWl0OmhvdmVyID4gYSB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnRzKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweDtcbn1cbiNtZW51c3dycCAudmVydGljYWx5TWVudSAubWFpbk1lbnUgLm1haW5tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW1haW5sMSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHg7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtOmhvdmVyIC5tZW51IHN2ZyBwb2x5bGluZSB7XG4gIHN0cm9rZTogdmFyKC0tYWNjZW50cyk7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtOmZvY3VzIC5tZW51LWRyb3Bkb3duLCAjbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtOmhvdmVyIC5tZW51LWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4jbWVudXN3cnAgLnZlcnRpY2FseU1lbnUgLm1haW5NZW51IC5tYWlubWVudS1pdGVtOmZvY3VzID4gYSwgI21lbnVzd3JwIC52ZXJ0aWNhbHlNZW51IC5tYWluTWVudSAubWFpbm1lbnUtaXRlbTpob3ZlciA+IGEge1xuICBjb2xvcjogdmFyKC0tYWNjZW50cyk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHg7XG59XG5cbi5jaGF0c2NvbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNoYXRzY29udCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJBcmNoaXZvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOGYzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q5Q0I5RTtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwcHggMHB4O1xufVxuLmNoYXRzY29udCAuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjhmMztcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY29udGFjdExJc3Qge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZGRkNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jb250YWN0TElzdCBoNCB7XG4gIGNvbG9yOiB2YXIoLS1zZWMtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJBcmNoaXZvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTRweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZGRkNjtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY29udGFjdExJc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIG1heC1oZWlnaHQ6IDM4MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jb250YWN0TElzdCB1bCBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jb250YWN0TElzdCB1bCBsaSAuY29udC1kdGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY29udGFjdExJc3QgdWwgbGkgLmNvbnQtZHRhaWwgLmNvbnRwcm9mIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODQ1Yztcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY29udGFjdExJc3QgdWwgbGkgLmNvbnQtZHRhaWwgLmNvbnRwcm9mIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jb250YWN0TElzdCB1bCBsaSAuY29udC1kdGFpbCAuY29udHByb2YgLm5vcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jb250YWN0TElzdCB1bCBsaSAuY29udC1kdGFpbCAuY29udG5hbXNnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNvbnRhY3RMSXN0IHVsIGxpIC5jb250LWR0YWlsIC5jb250bmFtc2cgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzJBMkMyQjtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY29udGFjdExJc3QgdWwgbGkgLmNvbnQtZHRhaWwgLmNvbnRuYW1zZyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogcmdiYSg0MiwgNDQsIDQzLCAwLjUpO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jb250YWN0TElzdCB1bCBsaTpob3ZlciwgLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jb250YWN0TElzdCB1bCBsaTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbWFpbi1jb2xvciksIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kaW5nKTtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWRkZDY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMHB4IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IGg0IHtcbiAgY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxNHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZGQ2O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAuY29udC1kdGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWRkZDY7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC5jb250LWR0YWlsIC5jb250cHJvZiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTg0NWM7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC5jb250LWR0YWlsIC5jb250cHJvZiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLmNvbnQtZHRhaWwgLmNvbnRwcm9mIC5ub3Byb2ZpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLmNvbnQtZHRhaWwgLmNvbnRuYW1zZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAuY29udC1kdGFpbCAuY29udG5hbXNnIGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6ICMyQTJDMkI7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC5jb250LWR0YWlsIC5jb250bmFtc2cgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYmEoNDIsIDQ0LCA0MywgMC41KTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLm1zZ0NvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtaW4taGVpZ2h0OiAzMjVweDtcbiAgbWF4LWhlaWdodDogMzMwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQ0LCA0MywgMC4wNik7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC5tc2dDb250IC5zZW5kZXItaGlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAubXNnQ29udCAuc2VuZGVyLWhpcyBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDEycHggNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLm1zZ0NvbnQgLnNlbmRlci1oaXMgbGkgLnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAubXNnQ29udCAuc2VuZGVyLWhpcyBsaSAudGV4dCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYmEoNDIsIDQ0LCA0MywgMC44NSk7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC5tc2dDb250IC5zZW5kZXItaGlzIGxpIC50aW1lY250IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogcmdiYSg0MiwgNDQsIDQzLCAwLjUpO1xuICBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAubXNnQ29udCAucmVjZWl2ZXItaGlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLm1zZ0NvbnQgLnJlY2VpdmVyLWhpcyBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODQ1YztcbiAgcGFkZGluZzogOHB4IDEycHggNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLm1zZ0NvbnQgLnJlY2VpdmVyLWhpcyBsaSAudGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC5tc2dDb250IC5yZWNlaXZlci1oaXMgbGkgLnRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAubXNnQ29udCAucmVjZWl2ZXItaGlzIGxpIC50aW1lY250IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAud3J0bXNnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLndydG1zZyBmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLndydG1zZyBmb3JtIC50ZXh0ZmllbGQge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNoYXRzY29udCAuZm9ybSAuY2hjb24td3JwIC5jaGF0Q29udCAud3J0bXNnIGZvcm0gLnRleHRmaWVsZCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRpbmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLW1haW4tY29sb3IpLCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLndydG1zZyBmb3JtIC50ZXh0ZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCREMzQzc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC53cnRtc2cgZm9ybSAudGV4dGZpZWxkIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1tYWluLWNvbG9yKSwgMC40NSk7XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC53cnRtc2cgZm9ybSAudGV4dGZpZWxkIC5zZW5kYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jaGF0c2NvbnQgLmZvcm0gLmNoY29uLXdycCAuY2hhdENvbnQgLndydG1zZyBmb3JtIC50ZXh0ZmllbGQgLnNlbmRidG4gaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC53cnRtc2cgZm9ybSAudGV4dGZpZWxkIC5zZW5kYnRuOmhvdmVyLCAuY2hhdHNjb250IC5mb3JtIC5jaGNvbi13cnAgLmNoYXRDb250IC53cnRtc2cgZm9ybSAudGV4dGZpZWxkIC5zZW5kYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tYWluLWNvbG9yKSwgMC4xKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICNtZW51c3dycCB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDk4dmggLSA1NnB4KTtcbiAgfVxuICAjbWVudXN3cnAgLnZlcnRpY2FseU1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI21lbnVzd3JwIC5tZW51IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW5uZXItTW9iaWxlTWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweDtcbiAgICB6LWluZGV4OiAxMDQwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2xvcik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUgLm0tbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLml0ZW0tbW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4td2lkdGg6IGNhbGMoKDEwMHZ3IC0gNDBweCkgLyA1KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gICAgbWFyZ2luOiAwcHggMnB4O1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLml0ZW0tbW51OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUgLm0tbWVudSAuaXRlbS1tbnU6aG92ZXIsIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLml0ZW0tbW51OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk4NDVjO1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLmhvbWljb246OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9ob21pY29uLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLmlkZW50aWNvbjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2lkZW50aWNvbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAuaW5uZXItTW9iaWxlTWVudSAubW9iaWxlbWVudSAubS1tZW51IC5ndXJkaWNvbjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2d1YXJkaWNvbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAuaW5uZXItTW9iaWxlTWVudSAubW9iaWxlbWVudSAubS1tZW51IC5kb2NpY29uOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZG9jaWNvbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAuaW5uZXItTW9iaWxlTWVudSAubW9iaWxlbWVudSAubS1tZW51IC5jb250cmljb246OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9jb250cmljb24uc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAjbWVudXN3cnAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTh2aCAtIDU2cHgpO1xuICB9XG4gICNtZW51c3dycCAudmVydGljYWx5TWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbWVudXN3cnAgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbm5lci1Nb2JpbGVNZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHggOHB4O1xuICAgIHotaW5kZXg6IDEwNDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWNvbG9yKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbiAgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuaW5uZXItTW9iaWxlTWVudSAubW9iaWxlbWVudSAubS1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUgLm0tbWVudSAuaXRlbS1tbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogY2FsYygoMTAwdncgLSA0MHB4KSAvIDUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICBtYXJnaW46IDBweCAycHg7XG4gIH1cbiAgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUgLm0tbWVudSAuaXRlbS1tbnU6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuICAuaW5uZXItTW9iaWxlTWVudSAubW9iaWxlbWVudSAubS1tZW51IC5pdGVtLW1udTpob3ZlciwgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUgLm0tbWVudSAuaXRlbS1tbnU6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTg0NWM7XG4gIH1cbiAgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUgLm0tbWVudSAuaG9taWNvbjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2hvbWljb24uc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgLmlubmVyLU1vYmlsZU1lbnUgLm1vYmlsZW1lbnUgLm0tbWVudSAuaWRlbnRpY29uOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWRlbnRpY29uLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLmd1cmRpY29uOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZ3VhcmRpY29uLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLmRvY2ljb246OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kb2NpY29uLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5pbm5lci1Nb2JpbGVNZW51IC5tb2JpbGVtZW51IC5tLW1lbnUgLmNvbnRyaWNvbjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2NvbnRyaWNvbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuI21lbnVzd3JwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiA3MnB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDk4dmggLSA3MnB4KTtcbn1cbiNtZW51c3dycCAuaW5uZXItTW9iaWxlTWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbWVudXN3cnAgLmlubmVyTWVudSB7XG4gIG9yZGVyOiAyO1xuICB3aWR0aDogMTAwJTtcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHtcbiAgcGFkZGluZzogOHB4IDIwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCNTczMjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDk4NDVjO1xufVxuI21lbnVzd3JwIC5pbm5lck1lbnUgLm1lbnUgdWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbWVudXN3cnAgLmlubmVyTWVudSAubWVudSB1bCAubWVudWxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjMUI1NzMyO1xufVxuI21lbnVzd3JwIC5pbm5lck1lbnUgLm1lbnUgdWwgLm1lbnVsaW5lOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zaXRpb246IGNhbGMoMC4zcyAqIDEpO1xufVxuI21lbnVzd3JwIC5pbm5lck1lbnUgLm1lbnUgdWwgLm0tbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xufVxuI21lbnVzd3JwIC5pbm5lck1lbnUgLm1lbnUgdWwgLm0tbWVudSBsaSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHVsIC5tLW1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjb2xvcjogI0Q5Q0I5RTtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG59XG4jbWVudXN3cnAgLmlubmVyTWVudSAubWVudSB1bCAubS1tZW51IGxpIGE6Zm9jdXMge1xuICBjb2xvcjogIzFCNTczMjtcbn1cbiNtZW51c3dycCAuaW5uZXJNZW51IC5tZW51IHVsIC5tLW1lbnUgbGk6Zm9jdXMgYSwgI21lbnVzd3JwIC5pbm5lck1lbnUgLm1lbnUgdWwgLm0tbWVudSBsaTphY3RpdmUge1xuICBjb2xvcjogIzFCNTczMjtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/template/template.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/template/template.component.ts ***!
    \*******************************************************/

  /*! exports provided: TemplateComponent */

  /***/
  function srcAppSharedTemplateTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
      return TemplateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");

    var TemplateComponent = /*#__PURE__*/function () {
      function TemplateComponent(configuration, router) {
        _classCallCheck(this, TemplateComponent);

        this.configuration = configuration;
        this.router = router;
        this.currentUser = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(localStorage.getItem(this.configuration.JWT_Token));
        console.log(this.currentUser);
      }

      _createClass(TemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToMyService",
        value: function goToMyService() {
          this.router.navigate(['/dashboard/services', this.currentUser.PartnerId]);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem(this.configuration.JWT_Token);
          this.router.navigate(['/']);
        }
      }]);

      return TemplateComponent;
    }();

    TemplateComponent.ctorParameters = function () {
      return [{
        type: src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-template',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/template/template.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./template.component.scss */
      "./src/app/shared/template/template.component.scss"))["default"]]
    })], TemplateComponent);
    /***/
  },

  /***/
  "./src/app/user-edit/user-edit.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/user-edit/user-edit.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserEditUserEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form.normal-form {\n  margin: 50px;\n}\n\n.controles-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controles-container > * {\n  width: 100%;\n}\n\n.add-bottom-padding {\n  padding-bottom: 10px;\n}\n\nmat-radio-group mat-radio-button {\n  margin-left: 5px;\n}\n\n.button-row button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1lZGl0L0U6XFxBbmd1bGFyUHJvamVjdFxcaWhvaG8tdWkvc3JjXFxhcHBcXHVzZXItZWRpdFxcdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksWUFBQTtBQ0hKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7QUNGSjs7QURLQTtFQUNJLG9CQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBRFNBO0VBQ0ksV0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hdC1mb3JtLWZpZWxke1xyXG4vLyAgICAgd2lkdGg6IDQwMHB4O1xyXG4vLyB9XHJcblxyXG5mb3JtLm5vcm1hbC1mb3JtIHtcclxuICAgIG1hcmdpbjogNTBweDtcclxufVxyXG4uY29udHJvbGVzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFkZC1ib3R0b20tcGFkZGluZ3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLy8gbWF0LWNhcmQtdGl0bGV7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcblxyXG4uYnV0dG9uLXJvdyBidXR0b257XHJcbiAgICBtYXJnaW46IDVweDtcclxufSIsImZvcm0ubm9ybWFsLWZvcm0ge1xuICBtYXJnaW46IDUwcHg7XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY29udHJvbGVzLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC1ib3R0b20tcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5tYXQtcmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5idXR0b24tcm93IGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user-edit/user-edit.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-edit/user-edit.component.ts ***!
    \**************************************************/

  /*! exports provided: UserEditComponent */

  /***/
  function srcAppUserEditUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
      return UserEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/users/user.service */
    "./src/app/services/users/user.service.ts");

    var UserEditComponent = /*#__PURE__*/function () {
      function UserEditComponent(userService) {
        _classCallCheck(this, UserEditComponent);

        this.userService = userService;
        this.backToUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.genders = [{
          id: 3,
          value: 'Male'
        }, {
          id: 2,
          value: 'Female'
        }, {
          id: 4,
          value: 'Other'
        }];
        this.user = {};
        this.loadRoles();
      }

      _createClass(UserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadRoles",
        value: function loadRoles() {
          var _this18 = this;

          this.userService.getRoles().subscribe(function (data) {
            _this18.roles = data;
          }, function (error) {});
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this19 = this;

          if (form.invalid) {
            return;
          } else {
            this.user.roleId = +this.user.roleId;
            this.userService.createUser(this.user).subscribe(function (data) {
              // window.location.reload();
              console.log('well done');

              _this19.closeForm();
            }, function (error) {
              console.log(error + '');
            });
          } // console.log(this.datepipe.transform(this.ownerForm.get('dob').value, 'yyyy-MM-dd'));

        }
      }, {
        key: "closeForm",
        value: function closeForm() {
          this.backToUser.emit(false);
        }
      }]);

      return UserEditComponent;
    }();

    UserEditComponent.ctorParameters = function () {
      return [{
        type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserEditComponent.prototype, "backToUser", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-edit.component.scss */
      "./src/app/user-edit/user-edit.component.scss"))["default"]]
    })], UserEditComponent);
    /***/
  },

  /***/
  "./src/app/users/users.component.scss":
  /*!********************************************!*\
    !*** ./src/app/users/users.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvRTpcXEFuZ3VsYXJQcm9qZWN0XFxpaG9oby11aS9zcmNcXGFwcFxcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURPRTtFQUNFLHlIQUFBO0VBQ0EsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWhlYWRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHggMDtcclxuICB9XHJcblxyXG4gIC8vIG1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gIC8vICAgcGFkZGluZzogMTAwcHggMTAwcHggMDtcclxuICAvLyAgIGZsb2F0OiByaWdodDtcclxuICAvLyB9XHJcblxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcblxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiA4cHggMjRweCAwO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: PeriodicElement, UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeriodicElement", function () {
      return PeriodicElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/users/user.service */
    "./src/app/services/users/user.service.ts");

    var PeriodicElement = function PeriodicElement() {
      _classCallCheck(this, PeriodicElement);
    };

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(userService) {
        _classCallCheck(this, UsersComponent);

        this.userService = userService;
        this.users = [];
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUsers('none');
        }
      }, {
        key: "backToUserList",
        value: function backToUserList(event) {
          this.loadUsers('add');
        }
      }, {
        key: "loadUsers",
        value: function loadUsers(value) {
          var _this20 = this;

          this.userService.getUsers().subscribe(function (data) {
            _this20.users = data;

            if (value === 'add' || value === 'delete') {}

            _this20.isNewUser = false;
          }, function (error) {
            console.log(error + '');
          });
        }
      }, {
        key: "newEmployee",
        value: function newEmployee() {
          this.isNewUser = true;
        } // applyFilter(filterValue: string) {
        //   filterValue = filterValue.trim(); // Remove whitespace
        //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        //   this.dataSource.filter = filterValue;
        // }

      }, {
        key: "closeCreateUser",
        value: function closeCreateUser(even) {
          this.loadUsers('add');
          this.isNewUser = false;
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', {
      "static": false
    })], UsersComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/users/users.component.scss"))["default"]]
    })], UsersComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-dashboard-dashboard-module-es5.js.map