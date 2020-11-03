FROM gitpod/workspace-full-vnc

USER gitpod

# install chrome runtime: libgbm-dev for electron
RUN sudo apt-get -q update \
  && sudo apt-get -y install libgbm-dev

USER root

COPY start-vnc-session.sh /usr/bin/
RUN chmod +x /usr/bin/start-vnc-session.sh
