FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y wget gnupg2 software-properties-common && \
    wget https://apt.puppetlabs.com/puppet7-release-jammy.deb && \
    dpkg -i puppet7-release-jammy.deb && \
    apt-get update && \
    apt-get install -y puppet-agent docker.io && \
    rm -rf /var/lib/apt/lists/* puppet7-release-jammy.deb

# Add puppet to PATH
ENV PATH="/opt/puppetlabs/bin:$PATH"

WORKDIR /puppet
RUN chmod 755 /puppet

CMD ["puppet", "--version"]