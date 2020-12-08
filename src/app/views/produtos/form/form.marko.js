// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
  marko_componentType = "/banco_projeto_web$1.0.0/src/app/views/livros/form/form.marko",
  marko_renderer = require("marko/src/runtime/components/renderer"),
  marko_attr = require("marko/src/runtime/html/helpers/attr"),
  helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
  marko_escapeXml = helpers_escape_xml.x,
  marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
  init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
  await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
  _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body><h1>Cadastro de livros</h1><form action=/livros method=post>");

  if (data.livro.id) {
    out.w("<section><input type=hidden name=_method value=put></section>");
  }

  out.w("<input type=hidden id=id name=id" +
    marko_attr("value", data.produto.id) +
    "><section><label for=titulo>Titulo:</label><input type=text id=titulo name=titulo" +
    marko_attr("value", data.produto.nomedoproduto) +
    " placeholder=\"digite o nome do produto\"></section><section><label for=autor>Autor:</label><input type=text id=autor name=autor" +
    marko_attr("value", data.produto.laboratorio) +
    " placeholder=\"digite o nome do laboratorio\"></section><section><label for=preco>Preço:</label><input type=number id=preco name=preco" +
    marko_attr("value", data.produto.tipo) +
    " placeholder=\"digite a data validade do produto\"></section><section><label for=descricao>Descricao:</label><textarea cols=20 rows=10 id=descricao name=descricao placeholder=\"digite a descricao do livro\"> " +
    marko_escapeXml(data.produto.Validade) +






    " </textarea></section><input type=submit value=Salvar></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
  ___implicit: true,
  ___type: marko_componentType
});

marko_template.meta = {
  id: "/banco_projeto_web$1.0.0/src/app/views/livros/form/form.marko",
  tags: [
    "marko/src/core-tags/components/init-components-tag",
    "marko/src/core-tags/core/await/reorderer-renderer",
    "marko/src/core-tags/components/preferred-script-location-tag"
  ]
};
