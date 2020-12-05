// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/livraria-paris$1.0.0/src/app/views/livros/lista/lista.marko",
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

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous></head><body><h1>Listagem de Livros</h1><table id=livros class=\"table table-bordered\"><tr><th>ID</th><th>Título</th><th>Autor</th><th>Preco</th><th>Editar</th><th>Remover</th></tr>");

  var $for$0 = 0;

  marko_forOf(data.livros, function(item) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "livro_" + (item.id == null ? "" : item.id)) +
      "><td>" +
      marko_escapeXml(item.id) +
      "</td><td>" +
      marko_escapeXml(item.titulo) +
      "</td><td>" +
      marko_escapeXml(item.autor) +
      "</td><td>" +
      marko_escapeXml(item.preco) +
      "</td><td>" +
      marko_escapeXml(item.descricao) +
      "</td><td><a" +
      marko_attr("href", "/livros/form/" + (item.id == null ? "" : item.id)) +
      " data-type=editar>Editar</a></td><td><a href=#" +
      marko_attr("data-ref", item.id) +
      " data-type=remocao>Remover</a></td><td></td></tr>");
  });

  out.w("</table><script src=./estatico/js/remove-livro.js>\r\n            </script>");

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
    id: "/livraria-paris$1.0.0/src/app/views/livros/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
