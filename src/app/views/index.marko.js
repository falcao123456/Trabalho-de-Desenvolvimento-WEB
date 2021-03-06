// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/famacia-dorgasil$1.0.0/src/app/views/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1 crossorigin=anonymous><link rel=stylesheet href=site.css></head><body><header><h1>Farmacia Dorgasil</h1></header><nav class=><section><img class=\"media mx-auto d-block img-fluid \" src=./estatico/images/LOGO.png alt=\"Logo Imagem\" style=width:180px;height:60px;><ul class=\"row nav-pills nav-fill \"><a class=\"nav-link text-light\" href=#>Produtos</a><a class=\"nav-link text-light\" href=#>Funcionarios</a><a class=\"nav-link text-light\" href=#>Cadastro de Produto</a><a class=\"nav-link text-light\" href=#>Cadastro de Funcionarios</a></ul></section></nav> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "16");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/famacia-dorgasil$1.0.0/src/app/views/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
