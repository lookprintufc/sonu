//= require admin/js/modernizr.min.js
//= require jquery
//= require jquery_ujs
//= require admin/js/detect.js
//= require admin/js/fastclick.js
//= require admin/js/jquery.slimscroll.js
//= require admin/js/jquery.blockUI.js
//= require admin/js/waves.js
//= require admin/js/jquery.nicescroll.js
//= require admin/js/jquery.scrollTo.min.js




//= require admin/plugins/datatables/jquery.dataTables.min.js
//= require admin/plugins/datatables/dataTables.bootstrap.js


//= require admin/plugins/datatables/dataTables.bootstrap.js
//= require admin/plugins/datatables/dataTables.buttons.min.js
//= require admin/plugins/datatables/buttons.bootstrap.min.js
//= require admin/plugins/datatables/jszip.min.js
//= require admin/plugins/datatables/pdfmake.min.js
//= require admin/plugins/datatables/vfs_fonts.js
//= require admin/plugins/datatables/buttons.html5.min.js
//= require admin/plugins/datatables/buttons.print.min.js
//= require admin/plugins/datatables/dataTables.fixedHeader.min.js
//= require admin/plugins/datatables/dataTables.keyTable.min.js
//= require admin/plugins/datatables/dataTables.responsive.min.js
//= require admin/plugins/datatables/responsive.bootstrap.min.js
//= require admin/plugins/datatables/dataTables.scroller.min.js


//= require admin/pages/datatables.init.js

//= require admin/plugins/fileuploads/js/dropify.min.js

//= require toastr

var resizefunc = [];

TableManageButtons.init();

$('.dropify').dropify({
                messages: {
                    'default': 'Arraste e solte ou clique para substituir',
                    'replace': 'Arraste e solte ou clique para substituir',
                    'remove': 'Remover',
                    'error': 'Ooops, Algo anexado errado.'
                },
                error: {
                    'fileSize': 'The file size is too big (1M max).'
                }
            });