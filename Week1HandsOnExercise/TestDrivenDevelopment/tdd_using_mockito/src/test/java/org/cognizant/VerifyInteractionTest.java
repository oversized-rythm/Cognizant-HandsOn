package org.cognizant;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class VerifyInteractionTest {

    @Test
    void testVerifyInteraction() {

        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Act
        service.fetchData();

        // Assert
        verify(mockApi).getData();
    }
}