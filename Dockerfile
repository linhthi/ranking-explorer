FROM python:3.7

ADD . /todo

WORKDIR /todo

RUN pip install --upgrade pip
RUN pip install -r requirements.txt


CMD ["app.py"]