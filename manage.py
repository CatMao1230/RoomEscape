# manage.py
import os
import coverage

from flask_script import Manager

COV = coverage.coverage(
    branch=True,
    include='app/*',
    omit=[
        'app/server/config.py',
        'app/server/*/__init__.py'
    ]
)
COV.start()

from app.server import app

manager = Manager(app)

if __name__ == '__main__':
    manager.run()
