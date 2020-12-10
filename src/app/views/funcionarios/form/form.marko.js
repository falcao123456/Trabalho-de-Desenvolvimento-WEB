// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
  marko_componentType = "/banco_projeto_web$1.0.0/src/app/views/funcionarios/form/form.marko",
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

  out.w("<html><body><h1>Cadastro de Funcionarios</h1><form action=/funcionarios method=post>");

  if (data.funcionario.id) {
    out.w("<section><input type=hidden name=_method value=put></section>");
  }

  out.w("<input type=hidden id=id name=id" +
    marko_attr("value", data.funcionario.id) +
    "><section><label for=nome>Nome:</label><input type=text id=nome name=nome" +
    marko_attr("value", data.funcionario.nome) +
    " placeholder=\"Ex.: Galdir Reges\"></section><section><label for=cargo>Cargo:</label><input type=text id=cargo name=cargo" +
    marko_attr("value", data.funcionario.cargo) +
    " placeholder=\"Ex.: Analista Sênior\"></section><section><label for=cpf>CPF:</label><input type=number id=cpf name=cpf" +
    marko_attr("value", data.funcionario.cpf) +
    "placeholder=\"Ex.: Analista Sênior\"></section><section><label for=cpf>CPF:</label><input type=number id=cpf name=cpf" +





    " </textarea></section><input type=submit value=Cadastrar></form>");

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
  id: "/banco_projeto_web$1.0.0/src/app/views/funcionarios/form/form.marko",
  tags: [
    "marko/src/core-tags/components/init-components-tag",
    "marko/src/core-tags/core/await/reorderer-renderer",
    "marko/src/core-tags/components/preferred-script-location-tag"
  ]
};
