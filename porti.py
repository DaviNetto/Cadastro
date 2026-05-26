from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def principal():
    return render_template("index.html") # O Flask vai olhar dentro da pasta /templates

if __name__ == "__main__":
    app.run(debug=True)