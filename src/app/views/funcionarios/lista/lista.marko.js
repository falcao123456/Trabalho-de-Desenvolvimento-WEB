// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
  marko_componentType = "/banco_projeto_web$1.0.0/src/app/views/funcionarios/lista/lista.marko",
  marko_renderer = require("marko/src/runtime/components/renderer"),
  marko_forOf = require("marko/src/runtime/helpers/for-of"),
  helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
  marko_escapeXml = helpers_escape_xml.x,
  marko_attr = require("marko/src/runtime/html/helpers/attr"),
  marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
  init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
  await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
  _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous></head><body><h1>Listagem de Funcionarios</h1><table id=funcionarios class=\"table table-bordered\"><tr><th>ID</th><th>Nome</th><th>Cargo</th><th>CPF</th><th>Telefone</th><th>Idade</th><th>Editar</th><th>Remover</th></tr>");

  var $for$0 = 0;

  marko_forOf(data.funcionarios, function (item) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "funcionario_" + (item.id == null ? "" : item.id)) +
      "><td>" +
      marko_escapeXml(item.id) +
      "</td><td>" +
      marko_escapeXml(item.nome) +
      "</td><td>" +
      marko_escapeXml(item.cargo) +
      "</td><td>" +
      marko_escapeXml(item.cpf) +
      "</td><td>" +
      marko_escapeXml(item.telefone) +
      "</td><td><a" +
      marko_escapeXml(item.idade) +
      "</td><td>" +
      marko_attr("href", "/funcionarios/form/" + (item.id == null ? "" : item.id)) +
      " data-type=editar>Editar</a></td><td><a href=#" +
      marko_attr("data-ref", item.id) +
      " data-type=remocao>Remover</a></td><td></td></tr>");
  });

  out.w("</table><script src=./estatico/js/remove-funcionario.js>\r\n            </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  _preferred_script_location_tag({}, out);

  out.w("</body></html> ");
}

marko_template._ = marko_renderer(render, {
  ___implicit: true,
  ___type: marko_componentType
});

marko_template.meta = {
  id: "/banco_projeto_web$1.0.0/src/app/views/funcionarios/lista/lista.marko",
  tags: [
    "marko/src/core-tags/components/init-components-tag",
    "marko/src/core-tags/core/await/reorderer-renderer",
    "marko/src/core-tags/components/preferred-script-location-tag"
  ]
};