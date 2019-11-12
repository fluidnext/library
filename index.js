module.exports = {
    communicator: {
        DoubleCommunicator: require('./commonjs/communicator/DoubleCommunicator').DoubleCommunicator,
        Communicator: require('./commonjs/communicator/Communicator').Communicator,
        adapter: {
            SerialPortCommunicatorAdapter: require('./commonjs/communicator/adapter/SerialPortCommunicatorAdapter').SerialPortCommunicatorAdapter,
            UdpCommunicatorAdapter: require('./commonjs/communicator/adapter/UdpCommunicatorAdapter').UdpCommunicatorAdapter,
        }
    },
    container : {
        Container: require('./commonjs/container/Container').Container,
        ContainerAware: require('./commonjs/container/ContainerAware').ContainerAware
    },
    core : {
        Application: require('./commonjs/core/Application').Application,
        module: {
            Module: require('./commonjs/core/module/Module').Module
        },

    },
    event : {
        Event: require('./commonjs/event/Event').Event,
        EventManagerAware: require('./commonjs/event/EventManagerAware').EventManagerAware,
        EventManager: require('./commonjs/event/EventManager').EventManager,
        Listener: require('./commonjs/event/Listener').Listener
    },
    hydrator : {
        AbstractHydrator: require('./commonjs/hydrator/AbstractHydrator').AbstractHydrator,
        PropertyHydrator: require('./commonjs/hydrator/PropertyHydrator').PropertyHydrator,
        AggregatePropertyHydrator: require('./commonjs/hydrator/AggregatePropertyHydrator').AggregatePropertyHydrator,
        strategy : {
            property: {
                MapStrategy : require('./commonjs/hydrator/strategy/property/MapStrategy').MapStrategy,
            },
            value : {
                HydratorStrategy : require('./commonjs/hydrator/strategy/value/HydratorStrategy').HydratorStrategy,
                HybridStrategy : require('./commonjs/hydrator/strategy/value/HybridStrategy').HybridStrategy,
                NumberStrategy : require('./commonjs/hydrator/strategy/value/NumberStrategy').NumberStrategy,
            }
        }
    },
    localize : {
        Localize : require('./commonjs/localize/Localize').Localize
    },
    permission : {
        acl: {
            Acl: require('./commonjs/permission/acl/Acl').Acl,
            adapter: {
                JsAclAdapter: require('./commonjs/permission/acl/adapter/JsAclAdapter').JsAclAdapter,
            }
        }
    },
    validation : {
        RegExValidation : require('./commonjs/validation/RegExValidation').RegExValidation,
        DirectoryExistValidator : require('./commonjs/validation/DirectoryExistValidator').DirectoryExistValidator,
        DirectoryExistInPathValidator : require('./commonjs/validation/DirectoryExistInPathValidator').DirectoryExistInPathValidator
    }
};
