
with import <nixpkgs> {};

let
  myPythonEnv = python311.withPackages(ps: [
    ps.flask
    ps.flask-cors
     ps.pandas
    ps.numpy
  ]);
in

mkShell {
  buildInputs = [
    myPythonEnv
  ];
}